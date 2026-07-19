import { getCharacterClass } from "../utils/typing";
import { useTypingAutoScroll } from "../hooks/useTypingAutoScroll";

type WriteAreaProps = {
  text: string;
  loading: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const WriteArea = ({ text, loading, value, onChange }: WriteAreaProps) => {
  const { displayRef, textareaRef, caretRef } = useTypingAutoScroll(value);

  return (
    <div className="relative min-h-0 flex-1 bg-secondary rounded-lg font-mono text-lg sm:text-xl lg:text-2xl overflow-hidden">
      <div
        ref={displayRef}
        aria-hidden="true"
        className="absolute inset-0 p-4 leading-relaxed select-none whitespace-pre-wrap text-lg sm:text-xl lg:text-2xl overflow-hidden"
      >
        {loading ? (
          <p className="text-black">Loading...</p>
        ) : (
          text.split("").map((char, i) => (
            <span
              key={i}
              ref={i === value.length ? caretRef : null}
              className="relative"
            >
              {i === value.length && (
                <span
                  className="
                      absolute
                      left-0
                      top-[0.1em]
                      h-[1em]
                      w-0.5
                      bg-black
                      opacity-100
                      cursor
                    "
                />
              )}
              <span className={getCharacterClass(value[i], char)}>{char}</span>
            </span>
          ))
        )}
      </div>

      <textarea
        ref={textareaRef}
        className="
          absolute inset-0 p-4 w-full h-full
          overflow-hidden
          bg-transparent
          text-transparent
          caret-transparent
          resize-none
          outline-none
          font-mono leading-relaxed
          text-lg sm:text-xl lg:text-2xl

          selection:bg-transparent
          selection:text-transparent
        "
        value={value}
        onChange={onChange}
        spellCheck={false}
        autoComplete="off"
        autoFocus
      />
    </div>
  );
};

export default WriteArea;
