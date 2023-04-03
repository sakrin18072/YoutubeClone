import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { CheckCircle } from "@mui/icons-material"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videosSide, setVideosSide] = useState(null);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&id=${id}`)
      .then((data) => {
        setVideo(data.items[0])
      })
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setVideosSide(data.items))
  }, [id])
  if (!video?.snippet) return 'Loading...'
  console.log(video)
  const { snippet: { title, channelId, channelTitle, description } } = video
  return (
    <div className="" style={{ overflowY: 'scroll' }}>
      <div className="" style={{ width: 'inherit' }} >
        <div className="" style={{  }}>
          <div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width='100%' height="70vh" />
          </div>
          <div className="container">
            <h3 className=" mt-2">{title}</h3>

            <Link to={`/YoutubeClone/channel/${channelId}`} className="nav-link  mt-3"> <div>Channel: {channelTitle} <CheckCircle sx={{ fontSize: 20, color: 'gray', ml: '5px' }} /></div> </Link>


            <div className=" h3 mt-5">Description:</div>
            <div className=" pb-5">{description}</div>
            <div className="h4 text-center  pb-5">Similar Videos to <span className="text-danger">watch</span></div>
          <Videos videos={videosSide} />
          </div>
        </div>
        
      </div>


    </div>
  )
}

export default VideoDetail