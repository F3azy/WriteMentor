import { useCallback, useEffect, useState } from "react";

type WikiLang = "en" | "pl" | "de" | "fr";

const cleanText = (str: string) =>
  str
    .replace(/\u00A0/g, " ")
    .replace(/–|—/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();

export function useWikiText(lang: WikiLang = "en") {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchText = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://${lang}.wikipedia.org/api/rest_v1/page/random/summary`
      );

      const data = await res.json();

      setText(cleanText(data.extract || ""));
    } finally {
      setLoading(false);
    }
  }, [lang]);

  useEffect(() => {
    fetchText();
  }, [fetchText]);

  return { text, loading, refetch: fetchText };
}