import { logoFull } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex h-16 py-3">
      <img src={logoFull} />
    </nav>
  );
};

export default Navbar;
