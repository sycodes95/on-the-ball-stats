import { Link } from 'react-router-dom';
import soccerBall from '../../../assets/images/soccer-ball.png'
function Logo () {
  return(
    <a className="relative flex items-center group hover:cursor-pointer" href='/' >
      {/* <img className='w-10 transition-all duration-1000 md:absolute group-hover:rotate-180'  src={soccerBall} alt='soccer-ball'/>
      <p className="hidden pt-2 text-4xl font-bold pl-9 font-logo font-outline-gray md:flex">nTheBall</p> */}
      <div className="relative pt-2 pr-4 font-bold text-black logo-font-size font-display-2 md:flex hover:opacity-70">
        <span>OnTheBall</span>
        <img className='absolute bottom-0 right-0 w-4 h-4 transition-all duration-1000 group-hover:rotate-180'  src={soccerBall} alt='soccer-ball'/>
      </div>
    </a>
  )
}

export default Logo;


