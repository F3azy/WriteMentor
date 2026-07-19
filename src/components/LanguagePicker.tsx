import { useEffect, useRef, useState } from "react";
import { languages, type Language } from "../const/Languages";
import { useLanguage } from "../context/Language/useLanguage";

type LanguagePickerProps = {
  onLanguageChange?: () => void;
};

const LanguagePicker = ({ onLanguageChange }: LanguagePickerProps) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const selected =
    languages.find((language) => language.code === lang) ?? languages[0];

  const handleSelect = (lang: Language) => {
    onLanguageChange?.();
    setLang(lang.code);
    setOpen(false);
  };

  // close on outside click
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
        w-full sm:w-auto
        py-3 sm:py-4 px-3
        flex items-center justify-between gap-x-2 
        text-white font-bold border 
        border-white rounded-lg 
        cursor-pointer
        "
      >
        <div className="flex items-center gap-x-2 ">
          <img width={28} src={selected.flag} alt={selected.label} />
          {selected.label}
        </div>
        <span
          className={`transition-transform duration-200 ${open ? "rotate-90" : "rotate-0"}`}
        >
          {">"}
        </span>
      </button>

      {/* Dropdown */}
      <div
        className={`
        absolute 
        mt-2 
        w-full max-h-60
        bg-black 
        border border-white rounded-lg 
        overflow-y-auto custom-scrollbar 
        z-50
        origin-top transition-all duration-300 ease-out
        ${
          open
            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }
        `}
      >
        {languages.map((lang) => (
          <button
            type="button"
            key={lang.code}
            onClick={() => handleSelect(lang)}
            className="
              w-full 
              flex gap-x-2 
              px-3 py-4 
              hover:bg-white/10 
              cursor-pointer 
              text-white"
          >
            <img width={22} src={lang.flag} alt={lang.label} />
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguagePicker;
