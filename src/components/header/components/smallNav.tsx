import { Link, useLocation } from "react-router-dom";
import trophy from "../../../assets/images/trophy.png"
import home from "../../../assets/images/home.png"
import { useEffect } from "react";


function MobileNav () {
  const location = useLocation()
  const paths = [
    { name: 'Home', route: '/', icon: home},
    { name: 'Top Leagues', route: '/top-leagues', icon: trophy},
    { name: 'All Leagues', route: '/leagues', icon: trophy}

  ]
  useEffect(()=> {
    
  },[])
  return (
    <div className="fixed bottom-0 left-0 z-50 grid items-center w-full h-20 grid-cols-3 gap-2 p-2 text-xs text-black bg-white md:hidden">
      {
      paths.map((path, index) => (
        <Link className={`flex flex-col justify-center  h-full items-center ${location.pathname === path.route ? 'opacity-100' : 'opacity-50'}`} to={`${path.route}`} key={index}>
          <img className="object-contain w-6 h-6" src={path.icon} alt="" />
          <span> {path.name}</span>
        </Link>
      ))
      }
     
    </div>
  )
}

export default MobileNav;