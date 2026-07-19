import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/Language/useLanguage";
import { cleanText } from "../utils/cleanText";

export function useWikiText() {
  const { lang } = useLanguage();

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const fetchText = useCallback(async () => {
    controllerRef.current?.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://${lang}.wikipedia.org/api/rest_v1/page/random/summary`,
        { signal: controller.signal },
      );

      if (!res.ok) {
        throw new Error(`Wikipedia returned ${res.status}`);
      }

      const data = await res.json();

      setText(cleanText(data.extract || ""));
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
      console.error(error);
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [lang]);

  useEffect(() => {
    fetchText();
  }, [fetchText]);

  return { text, loading, error, refetch: fetchText };
}
