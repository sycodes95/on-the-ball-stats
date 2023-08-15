import Logo from "./components/logo";
import Nav from "./components/nav";

function Header () {
  return (
    <div className="flex justify-center w-full h-16 p-4 shadow-lg bg-opacity-70 shadow-gray-300">
      <div className="flex items-center w-full max-w-5xl gap-8">
        <Logo/>
        <Nav/>
      </div>
    </div>
  )
}

export default Header;