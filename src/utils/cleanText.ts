export const cleanText = (str: string) =>
  str
    .replace(/\u00A0/g, " ")
    .replace(/–|—/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();