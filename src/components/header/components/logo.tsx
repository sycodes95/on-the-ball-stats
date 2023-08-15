import { Link } from 'react-router-dom';
import soccerBall from '../../../assets/images/soccer-ball.png'
function Logo () {
  return(
    <a className="relative flex items-center group hover:cursor-pointer" href='/' >
      <img className='w-10 transition-all duration-1000 md:absolute group-hover:rotate-180'  src={soccerBall} alt='soccer-ball'/>
      <p className="hidden pt-2 text-4xl font-bold pl-9 font-logo font-outline-slate md:flex">nTheBall</p>
    </a>
  )
}

export default Logo;


