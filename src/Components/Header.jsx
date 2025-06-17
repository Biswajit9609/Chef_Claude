import icon from "../assets/icons/icons8-chef-hat-100.png";

function Header() {
  return (
    <nav className="flex items-center justify-center gap-3 w-full fixed py-4 px-6 bg-[#0f0f0f] border-b border-gray-700 shadow z-50">
      <img src={icon} alt="Chef icon" className="h-10 w-auto" />
      <h1 className="font-bold text-3xl text-emerald-400 tracking-wide">Chef Claude</h1>
    </nav>
  );
}

export default Header;
