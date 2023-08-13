import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFixtureStats } from "../features/homepage/services/getFixtureStats";
import { getFixturesById } from "../services/getFixtureById";




function FixtureStats () {

  const { fixtureId } = useParams()
  const [fixture, setFixture] = useState()
  useEffect(()=> {
    getFixturesById(Number(fixtureId)).then(fixture => setFixture(fixture))
  },[])

  useEffect(()=> {
    console.log(fixture);
  },[fixture])


  return (
    <div className="w-full">
      {/* Fixture details */}
      <div className="flex flex-col w-full gap-2">
        
      </div>
    </div>
  )
}

export default FixtureStats;