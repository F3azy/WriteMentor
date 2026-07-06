import { useEffect, useState } from "react";
import { useWikiText } from "../hooks/useWikiText";
import LanguagePicker from "./LanguagePicker";
import Button from "./Button";
import WriteArea from "./WriteArea";

export default function WritePage() {
  const [visible, setVisible] = useState(false);

  const { text, loading, refetch } = useWikiText();
  const [value, setValue] = useState("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    if (newValue.length <= text.length) {
      setValue(newValue);

      const isComplete =
        newValue.length === text.length &&
        newValue.toLowerCase() === text.toLowerCase();

      if (isComplete) {
        refetch();
        setValue("");
      }
    }
  };

  const handleChangeText = async () => {
    await refetch();
    setValue("");
  };

  useEffect(() => {
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
        <Button className="tracking-wider" onClick={handleChangeText}>
          Change Text
        </Button>
        <Button className="tracking-wider" onClick={() => setValue("")}>Clear</Button>
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
