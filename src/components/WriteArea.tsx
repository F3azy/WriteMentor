import { useState } from "react";

const temp =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.";

const WriteArea = () => {
  const [value, setValue] = useState("");

  return (
    <div className="relative flex-1 bg-secondary rounded-lg font-bold text-2xl ">
      <div className="absolute inset-0 p-4">
        {temp.split("").map((char, i) => {
          const typed = value[i];

          if (typed === undefined) {
            return (
              <span key={i} className="text-black opacity-30">
                {char}
              </span>
            );
          }

          const isCorrect = typed?.toLowerCase() === char.toLowerCase();

          if (isCorrect) {
            return (
              <span key={i} className="text-black">
                {char}
              </span>
            );
          }

          return (
            <span key={i} className="text-red-500">
              {char}
            </span>
          );
        })}

      </div>
      <textarea
        name="Write"
        className="absolute inset-0 p-4 
        rounded-lg resize-none border-0 
        focus:outline-none outline-none 
        text-transparent caret-black"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        spellCheck={false}
        autoComplete="off"
        autoFocus
      />
    </div>
  );
};

export default WriteArea;
