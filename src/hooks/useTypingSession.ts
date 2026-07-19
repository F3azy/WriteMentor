import { useState } from "react";
import { isCompleteText } from "../utils/typing";

export function useTypingSession(text: string, refetch: () => Promise<void>) {
  const [value, setValue] = useState("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    if (newValue.length <= text.length) {
      setValue(newValue);

      if (isCompleteText(newValue, text)) {
        void refetch();
        setValue("");
      }
    }
  };

  const changeText = async () => {
    setValue("");
    await refetch();
  };

  const clearValue = () => setValue("");

  return { handleChangeValue, changeText, value, clearValue };
}
