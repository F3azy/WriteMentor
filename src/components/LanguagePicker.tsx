import { useEffect, useRef, useState } from "react";
import { languages, type Language } from "../const/Languages";
import { useLanguage } from "../context/Language/useLanguage";



const LanguagePicker = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

   const selected = languages.find((language) => language.code === lang) ?? languages[0];

  const handleSelect = (lang: Language) => {
    setLang(lang.code);
    setOpen(false);
  };

  // close on outside click
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
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="px-3 py-4 flex items-center gap-x-2 text-white font-bold border border-white rounded-lg cursor-pointer"
      >
        <img width={28} src={selected.flag} />
        {selected.label} {">"}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-full bg-black border border-white rounded-lg max-h-50 overflow-y-auto custom-scrollbar z-50">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex gap-x-2 px-3 py-4 hover:bg-white/10 cursor-pointer text-white"
            >
              <img width={22} src={lang.flag} />
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;