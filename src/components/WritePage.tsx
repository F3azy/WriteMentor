import { useEffect, useState } from "react";
import { useWikiText } from "../hooks/useWikiText";
import LanguagePicker from "./LanguagePicker";
import Button from "./Button";
import WriteArea from "./WriteArea";
import { useTypingSession } from "../hooks/useTypingSession";

export default function WritePage() {
  const { text, loading, refetch } = useWikiText();

  const { value, handleChangeValue, clearValue, changeText } = useTypingSession(
    text,
    refetch,
  );

  //start animation
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setVisible(true);
    });
  }, []);

  return (
    <div
      className={`
        flex flex-1 flex-col gap-y-5 lg:gap-y-8
        transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
      `}
    >
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-x-4">
        <LanguagePicker />
        <Button className="tracking-wider flex-1 sm:flex-none" onClick={changeText}>
          Change Text
        </Button>
        <Button className="tracking-wider flex-1 sm:flex-none" onClick={clearValue}>
          Clear
        </Button>
      </div>

      <WriteArea
        text={text}
        loading={loading}
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
}
