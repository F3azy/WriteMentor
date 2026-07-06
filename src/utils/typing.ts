export const isSameChar = (typed: string, target: string) =>
  typed.toLowerCase() === target.toLowerCase();

export const isCompleteText = (value: string, text: string) =>
  value.length === text.length && value.toLowerCase() === text.toLowerCase();

export const isSpace = (typed: string) => typed === " ";
