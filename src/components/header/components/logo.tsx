import { Link } from 'react-router-dom';
import soccerBall from '../../../assets/images/soccer-ball.png'
function Logo () {
  return(
    <Link className="flex items-center gap-2 group" to='/' >
      <img className='w-10 transition-all duration-1000 group-hover:rotate-180'  src={soccerBall} alt='soccer-ball'/>
      <p className="text-4xl font-display text-emerald-500"> ON THE BALL STATS</p>
    </Link>
  )
}

export default Logo;


