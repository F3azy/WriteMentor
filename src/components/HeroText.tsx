const HeroText = () => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <p className="text-white text-5xl">
        Improve your <span className="text-accent">writing</span> skills with
        this simple app.
      </p>
      <p className="text-gray text-3xl">Just choose your language and start typing.<span className="cursor">|</span></p>
    </div>
  );
};

export default HeroText;
