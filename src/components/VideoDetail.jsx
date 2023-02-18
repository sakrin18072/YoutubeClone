import { useState,useEffect } from "react"
import { Link,useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { CheckCircle } from "@mui/icons-material"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Stack,Box } from "@mui/system"

const VideoDetail = () => {
  const {id} = useParams();
  const [video,setVideo] = useState(null);
  const [videosSide,setVideosSide] = useState(null);
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet&id=${id}`)
    .then(data=>setVideo(data.items[0]))
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then(data=>setVideosSide(data.items))
  },[id])
  if(!video?.snippet) return 'Loading...'
  const {snippet : {title , channelId,channelTitle,description}} = video
  return (
    <>
    <div className=" bg-dark mx-auto" >
        <div className="col-md-10 mx-auto">
          <center className="pt-5 mx-auto"><ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width='50%'/>
          <div className="text-center display-6 pt-5">
            <Link to = {`/channel/${channelId}`} className="nav-link text-light text-center"> <div>Channel: {channelTitle} <CheckCircle sx={{ fontSize: 20, color: 'gray', ml: '5px' }} /></div> </Link>
            
          </div>
          <div className="text-light h3 mt-5">Description:</div>
          <div className="text-light pb-5 container">{description}</div>
          </center>
        </div>
    </div>
    <div className="display-6 bg-dark text-center text-light pb-5">Similar Videos to <span className="text-danger">watch</span></div>
    <div className="bg-dark">
    <Videos videos={videosSide}/>
  </div>
  </>
  )
}

export default VideoDetail