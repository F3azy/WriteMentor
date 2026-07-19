export const isSameChar = (typed: string, target: string) =>
  typed.toLowerCase() === target.toLowerCase();

export const isCompleteText = (value: string, text: string) =>
  value.length === text.length && value.toLowerCase() === text.toLowerCase();

export const isSpace = (typed: string) => typed === " ";

export const getCharacterClass = (
  typed: string | undefined,
  target: string,
) => {
  if (typed === undefined) {
    return "text-black opacity-30";
  }

  if (isSameChar(typed, target)) {
    return "text-black";
  }

  return isSpace(target) ? "bg-red-500" : "text-red-500";
};
