import { logoFull } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex h-16 py-3">
      <img src={logoFull} className="h-full max-w-45 sm:max-w-none" alt="logo"/>
    </nav>
  );
};

export default Navbar;
