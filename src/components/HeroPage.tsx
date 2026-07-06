import Button from "./Button";
import HeroText from "./HeroText";
import LanguagePicker from "./LanguagePicker";

type Props = {
  started: boolean;
  onStart: () => void;
};

const HeroPage = ({ started, onStart }: Props) => {
  return (
    <div
      className={`flex flex-col items-center gap-y-8 transition-all duration-500 ease-in-out ${started ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <HeroText />
      <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
        <LanguagePicker />
        <Button onClick={onStart}>Get Started</Button>
      </div>
    </div>
  );
};

export default HeroPage;
