import { Link } from "react-router-dom";
import { getURLFriendlyString } from "../../utils/getURLFriendlyString";

type TeamLinkProps = {
  teamId: number;
  teamName: string;
  children?: React.ReactNode;
  className?: string;
}

function TeamLink ({className, teamId, teamName, children} : TeamLinkProps) {
  return (
    <Link className={`${className}`}
    to={`/team/${teamId}/${getURLFriendlyString(teamName)}`}>
      {children}
    </Link>
  )
}

export default TeamLink;