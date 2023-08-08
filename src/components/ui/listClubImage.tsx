type ListClubImageProps = {
  src: string;
}


function ListClubImage ({src} : ListClubImageProps) {
  return(
    <div className="relative w-6 h-full">
      <img className="absolute left-0 -translate-y-1/2 top-1/2" src={src} alt="team-icon"/>
    </div>
  )
}

export default ListClubImage;