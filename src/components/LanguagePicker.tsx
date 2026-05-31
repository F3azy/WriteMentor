const LanguagePicker = () => {
  return (
    <div
      className="px-3 py-4 
    flex justify-center items-center
    gap-x-2
    text-white font-bold
    border-white border-2 rounded-lg hover:cursor-pointer"
    >
      <img
        width={28}
        src="https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/svg/1f1ec-1f1e7.svg"
      />
      English {">"}
    </div>
  );
};

export default LanguagePicker;
