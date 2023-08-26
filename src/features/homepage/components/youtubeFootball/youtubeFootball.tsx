// import { useEffect, useState } from "react"
// import { getYoutubeFootball } from "../../services/getYoutubeFootball"

// function YoutubeFootball () {
//   const [src, setSrc] = useState('')
//   useEffect(() => {
//     getYoutubeFootball().then(src => {
//       if(src) setSrc(src)
//     })
//   },[])
//   return(
//     <iframe id="youtubeIframe" height={480}  src={`https://youtube.com/embed/${src}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//   )
// }

// export default YoutubeFootball;