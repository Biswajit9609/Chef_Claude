import icon from "../assets/icons/chef_450166.png"
function Header() {
  return (
    <nav className="h-[4rem] nav bg-[#f8f9fa] flex justify-center items-center py-3 gap-3 w-full fixed">
        <img src={icon} alt="Chef icon" />
        <h1 className="font-bold text-3xl">Chef Claude</h1>
    </nav>
  )
}

export default Header