import { useParams } from "react-router-dom";



function FixtureStats () {

  const fixtureId = useParams()

  return (
    <div>
      fixture stats
    </div>
  )
}

export default FixtureStats;