import Logo from "./components/logo";
import Nav from "./components/nav";

function Header () {
  return (
    <div className="flex justify-center w-full h-16">
      <div className="flex items-center w-full max-w-5xl gap-8 p-4 ml-2 mr-2 rounded-b-2xl bg-stone-300 bg-opacity-80">
        <Logo/>
        <Nav/>
      </div>
    </div>
  )
}

export default Header;