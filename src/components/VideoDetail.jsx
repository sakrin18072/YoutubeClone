import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { CheckCircle } from "@mui/icons-material"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Stack, Box } from "@mui/system"

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videosSide, setVideosSide] = useState(null);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&id=${id}`)
      .then(data => setVideo(data.items[0]))
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setVideosSide(data.items))
  }, [id])
  if (!video?.snippet) return 'Loading...'
  const { snippet: { title, channelId, channelTitle, description } } = video
  return (
    <>
      <div className="row bg-dark" style={{width:'inherit'}} >
        <div className="col-12 col-md-8 p-5">
          <div>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width='inherit'/>
          </div>

          <Link to={`/YoutubeClone/channel/${channelId}`} className="nav-link text-light mt-3"> <div>Channel: {channelTitle} <CheckCircle sx={{ fontSize: 20, color: 'gray', ml: '5px' }} /></div> </Link>


          <div className="text-light h3 mt-5">Description:</div>
          <div className="text-light pb-5 ">{description}</div>

        </div>
        <div className="col-12 col-md-4" style={{ height: '100vh', overflowY: 'scroll' }}>
          <div className="h2 bg-dark text-center text-light pb-5">Similar Videos to <span className="text-danger">watch</span></div>
          <Videos videos={videosSide} />
        </div>
      </div>


    </>
  )
}

export default VideoDetail