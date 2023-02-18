import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
const ChannelDetail = () => {
  const {channelId} = useParams()
  const [currentChannel,setCurrentChannel] = useState(null)
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${channelId}`)
    .then(data=>setCurrentChannel(data?.items[0]))
    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
    .then(data=>setVideos(data?.items))
  },[channelId])
  console.log(currentChannel)
  return (
    <div className='bg-dark' style={{height:'auto'}}>
      <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(106,9,121,1) 20%, rgba(0,212,255,1) 100%)',height:'300px'}}>

      </div>
      <div className='text-dark'>
      <ChannelCard channel={currentChannel} MarginTop='-192px'/>
      <p className='display-6 text-center text-danger'>Uploads</p>
      <div className="container" style={{marginLeft:'auto'}}>
        <Videos videos = {videos}/>
      </div>
      </div>
    </div>
  )
}

export default ChannelDetail