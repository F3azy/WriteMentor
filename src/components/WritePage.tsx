import { useEffect, useState } from "react";
import LanguagePicker from "./LanguagePicker";
import Button from "./Button";
import WriteArea from "./WriteArea";

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

      <WriteArea />
    </div>
  );
}
