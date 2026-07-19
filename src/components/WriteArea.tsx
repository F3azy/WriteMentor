import { getCharacterClass } from "../utils/typing";

type WriteAreaProps = {
  text: string;
  loading: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const WriteArea = ({ text, loading, value, onChange }: WriteAreaProps) => {
  return (
    <div className="relative flex-1 bg-secondary rounded-lg font-mono text-lg sm:text-xl lg:text-2xl">
      <div className="absolute inset-0 p-4 leading-relaxed select-none whitespace-pre-wrap text-lg sm:text-xl lg:text-2xl">
        {loading ? (
          <p className="text-black">Loading...</p>
        ) : (
          text.split("").map((char, i) => (
            <span key={i} className={getCharacterClass(value[i], char)}>
              {char}
            </span>
          ))
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
