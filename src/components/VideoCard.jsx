import { padding } from '@mui/system'
import React from 'react'
import { Card } from 'react-bootstrap'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const VideoCard = ({ video }) => {
  if(!video?.snippet) return 'loading...'
  return (

      
        <div className='p-3' >
          <img className='' style={{ border: 'none', height: '180px', width: '360px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', objectFit: 'cover' }} src={video?.snippet?.thumbnails?.high?.url} alt="" />
          <div className='p-2' style={{width:'360px',height:'80px', backgroundColor: '#000', borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px' }}>
            <div className='p-1' style={{}}>
              <Link className='text-light' style={{ textDecoration: 'none' }}
                to={`/YoutubeClone/video/${video?.id?.videoId}`}>{video?.snippet?.title?.slice(0, 35)}</Link>
            </div>

            <div className='p-1'>
              <Link className='text-secondary' style={{ textDecoration: 'none'}}
                to={`/YoutubeClone/channel/${video?.snippet?.channelId}`}>{video?.snippet?.channelTitle.slice(0, 40)}</Link>
              <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />
            </div>
          </div>
        </div>
      

  )
}

export default VideoCard