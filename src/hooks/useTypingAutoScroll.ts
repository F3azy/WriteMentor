import { useLayoutEffect, useRef } from "react";

export function useTypingAutoScroll(value: string) {
  const displayRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const display = displayRef.current;
    const textarea = textareaRef.current;
    const caret = caretRef.current;

    if (!display || !textarea || !caret) return;

    const styles = getComputedStyle(display);
    const lineHeight = parseFloat(styles.lineHeight);
    const paddingTop = parseFloat(styles.paddingTop);

    // Position of the current typing row inside the text.
    const caretTop = caret.offsetTop;

    // First row stays at scrollTop 0.
    // When the caret enters row 2, scroll by one row.
    const nextScrollTop = Math.max(
      0,
      caretTop - paddingTop - lineHeight,
    );

    display.scrollTop = nextScrollTop;
    textarea.scrollTop = nextScrollTop;
  }, [value]);

  return {
    displayRef,
    textareaRef,
    caretRef,
  };
}