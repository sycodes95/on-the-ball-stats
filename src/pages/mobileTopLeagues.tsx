import { useEffect } from "react";
import Top20Leagues from "../features/homepage/components/top20Leagues/top20Leagues";

function MobileTopLeagues() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return(
    <div className="flex justify-center w-full h-full">
      <Top20Leagues mobileView={true}/>
    </div>

  )
}

export default MobileTopLeagues;