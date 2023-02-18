import { useState } from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({ videos }) => {
    if(videos===null) return 'Loading...'
    return (
        <div className='d-flex flex-wrap mx-auto'>
            {
                videos.map((item,idx)=>(
                    <div key={idx} className='mx-auto'>
                    {item?.id?.videoId && <VideoCard video = {item}/>}
                    {item?.id?.channelId && <ChannelCard channel = {item}/>}
                    </div>
                ))
            }
        </div>
    )
}

export default Videos