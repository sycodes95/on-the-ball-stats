import Logo from "./components/logo";
import Nav from "./components/nav";
import MobileNav from "./components/smallNav";

function Header () {
  return (
    <div className="flex justify-center w-full h-20">
      <div className="flex items-center w-full max-w-5xl gap-8 p-4 ml-2 mr-2 rounded-b-2xl ">
        <Logo/>
        <Nav/>
        <MobileNav/>
      </div>
    </div>
  )
}

export default Header;