import icon from "../assets/icons/chef_450166.png";

function Header() {
  return (
    <nav className="flex items-center justify-center gap-3 w-full fixed py-3 bg-gradient-to-r from-white to-gray-100 shadow-md z-50">
      <img src={icon} alt="Chef icon" className="h-10 w-auto" />
      <h1 className="font-bold text-3xl text-indigo-600">Chef Claude</h1>
    </nav>
  );
}

export default Header;
