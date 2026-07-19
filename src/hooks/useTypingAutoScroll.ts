import { useLayoutEffect, useRef } from "react";

const MOBILE_BREAKPOINT = 640;

export function useTypingAutoScroll(value: string) {
  const caretRef = useRef<HTMLSpanElement>(null);
  const previousCaretTop = useRef(0);

  useLayoutEffect(() => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    const caret = caretRef.current;
    if (!caret) return;

    const caretTop = caret.offsetTop;

    if (caretTop === previousCaretTop.current) return;

    previousCaretTop.current = caretTop;

    const viewportHeight =
      window.visualViewport?.height ?? window.innerHeight;

    const visibleBottom =
      (window.visualViewport?.offsetTop ?? 0) +
      viewportHeight -
      40;

    const { bottom } = caret.getBoundingClientRect();

    if (bottom > visibleBottom) {
      window.scrollBy({
        top: bottom - visibleBottom,
        behavior: "auto",
      });
    }
  }, [value]);

  return { caretRef };
}