

export const getYoutubeFootball = () => {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${import.meta.env.VITE_YT_CHANNEL_ID}&maxResults=1&order=date&type=video&key=${import.meta.env.VITE_YT_API_KEY}`)
  .then(res => res.json())
  .then(data => {
    if(data.items && data.items.length){
      return data.items[0].id.videoId
    }
    return null
  })
  .catch(err => {
    console.error(err)
    return null
  })
}

