import { useEffect, useState } from "react";
import LanguagePicker from "./LanguagePicker";
import Button from "./Button";

const temp =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.";

export default function WritePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // triggers animation AFTER mount
    requestAnimationFrame(() => {
      setVisible(true);
    });
  }, []);

  return (
    <div
      className={`
        flex flex-1 flex-col gap-y-8
        transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
      `}
    >
      <div className="flex gap-x-4">
        <LanguagePicker />
        <Button className="tracking-wider">Change</Button>
      </div>

      <div className="relative flex-1 bg-secondary rounded-lg font-bold text-2xl text-black">
        <p className="absolute inset-0 p-4 opacity-30">{temp}</p>
        <textarea
          name="Write"
          className="absolute inset-0 p-4 rounded-lg resize-none border-0 focus:outline-none bg-transparent"
        />
      </div>
    </div>
  );
}
