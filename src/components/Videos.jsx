import { useState } from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({ videos }) => {
    if(videos===null) return 'Loading...'
    return (
        <div className='d-flex flex-row flex-wrap'>
            {
                videos.map((item,idx)=>(
                    <div key={idx} className='mx-auto'>
                    {item?.id?.videoId && <VideoCard video = {item}/>}
                    <div>{item?.id?.channelId && <ChannelCard channel = {item}/>}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Videos