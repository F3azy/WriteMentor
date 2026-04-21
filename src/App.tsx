import Button from "./components/Button";
import HeroText from "./components/HeroText";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <header className="w-screen px-32">
        <Navbar />
      </header>
      <main className="px-32 flex-1 flex flex-col justify-center items-center gap-y-8">
        <HeroText />
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button>Get Started</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
