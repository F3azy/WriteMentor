import { useState } from "react";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";
import WritePage from "./components/WritePage";

function App() {
  const [started, setStarted] = useState(false);
  const [showWrite, setShowWrite] = useState(false);

  const handleStart = () => {
    setStarted(true);

    // wait for exit animation before switching page
    setTimeout(() => {
      setShowWrite(true);
    }, 450);
  };
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <header className="w-screen px-4 lg:px-32">
        <Navbar />
      </header>
      <main
        className="px-4 md:px-10 lg:px-32 
        py-4 md:py-6 lg:py-8
        flex-1 flex flex-col justify-center"
      >
        {!showWrite ? (
          <HeroPage started={started} onStart={handleStart} />
        ) : (
          <WritePage />
        )}
      </main>
    </div>
  );
}

export default App;
