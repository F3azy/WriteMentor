import { isSameChar, isSpace } from "../utils/typing";

type WriteAreaProps = {
  text: string;
  loading: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const WriteArea = ({ text, loading, value, onChange }: WriteAreaProps) => {
  return (
    <div className="relative flex-1 bg-secondary rounded-lg font-mono text-2xl">
      <div className="absolute inset-0 p-4 leading-relaxed select-none whitespace-pre-wrap">
        {loading ? (
          <p className="text-black">Loading...</p>
        ) : (
          text.split("").map((char, i) => {
            const typed = value[i];

            if (typed === undefined) {
              return (
                <span key={i} className="text-black opacity-30">
                  {char}
                </span>
              );
            }

            if (!isSameChar(typed, char)) {
              return (
                <span
                  key={i}
                  className={isSpace(char) ? " bg-red-500" : "text-red-500"}
                >
                  {char}
                </span>
              );
            }

            return (
              <span key={i} className="text-black">
                {char}
              </span>
            );
          })
        )}
      </div>

      <textarea
        className="
          absolute inset-0 p-4 w-full h-full
          bg-transparent
          text-transparent
          caret-black
          resize-none
          outline-none
          font-mono text-2xl leading-relaxed
          

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
