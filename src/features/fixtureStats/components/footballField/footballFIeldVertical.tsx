function FootballFieldVertical () {
  return(
    <div className='relative flex w-full rounded-md bg-emerald-500' style={{height: '1024px'}}>
      <div id="" className="absolute left-0 w-32 -translate-y-1/2 border-t-2 border-b-2 border-r-2 border-white border-opacity-50 rounded-r-md top-1/2 h-1/2"></div>
      <div id="" className="absolute h-full border-r-2 border-white border-opacity-50 left-1/2 rounded-r-md">
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 border-2 border-white border-opacity-50 rounded-full w-44 left-1/2 h-44 top-1/2 ">
      </div>
      <div id="" className="absolute right-0 w-32 -translate-y-1/2 border-t-2 border-b-2 border-l-2 border-white border-opacity-50 rounded-l-md top-1/2 h-1/2 "></div>
    </div>
  )
}

export default FootballFieldVertical;