export type Language = {
  code: "en" | "pl" | "de" | "fr" | "it" | "es";
  label: string;
  flag: string;
};

export const languages: Language[] = [
  {
    code: "en",
    label: "English",
    flag: "https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/svg/1f1ec-1f1e7.svg",
  },
  {
    code: "pl",
    label: "Polski",
    flag: "https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/svg/1f1f5-1f1f1.svg",
  },
  {
    code: "de",
    label: "Deutsch",
    flag: "https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/svg/1f1e9-1f1ea.svg",
  },
  {
    code: "fr",
    label: "Français",
    flag: "https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/svg/1f1eb-1f1f7.svg",
  },
  {
    code: "it",
    label: "Italiano",
    flag: "https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/svg/1f1ee-1f1f9.svg",
  },
  {
    code: "es",
    label: "Español",
    flag: "https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/svg/1f1ea-1f1f8.svg",
  },
];