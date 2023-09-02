function FootballFieldVertical () {
  return(
    <div className='relative flex w-full rounded-md bg-emerald-500' style={{height: '1024px'}}>
      <div id="" className="absolute top-0 w-1/2 h-32 -translate-x-1/2 border-b-2-2 border-l-2 border-r-2 border-white border-opacity-50 rounded-b-md left-1/2"></div>
      <div id="" className="absolute w-full border-b-2-2 border-white border-opacity-50 top-1/2 rounded-b-md">
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 border-2 border-white border-opacity-50 rounded-full w-44 left-1/2 h-44 top-1/2 ">
      </div>
      <div id="" className="absolute bottom-0 w-1/2 h-32 -translate-x-1/2 border-t-2 border-l-2 border-r-2 border-white border-opacity-50 rounded-t-md left-1/2"></div>
    </div>
  )
}

export default FootballFieldVertical;