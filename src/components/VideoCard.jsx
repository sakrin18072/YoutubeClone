import { padding } from '@mui/system'
import React from 'react'
import { Card } from 'react-bootstrap'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const VideoCard = ({ video }) => {
  if(!video?.snippet) return 'loading...'
  return (
    <>
      <div className='pb-3 row text-light' style={{borderRadius:'25px'}}>
        <div className='col' >
          <img className='' style={{ border: 'none', height: '180px', width: '358px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', objectFit: 'cover' }} src={video?.snippet?.thumbnails?.high?.url} alt="" />
          <div className='p-2' style={{height:'80px', backgroundColor: '#000', borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px' }}>
            <div className='p-1' style={{maxWidth:'358px'}}>
              <Link className='text-light' style={{ textDecoration: 'none' }}
                to={`/video/${video?.id?.videoId}`}>{video?.snippet?.title?.slice(0, 35)}</Link>
            </div>

            <div className='p-1'>
              <Link className='text-secondary' style={{ textDecoration: 'none'}}
                to={`/channel/${video?.snippet?.channelId}`}>{video?.snippet?.channelTitle.slice(0, 40)}</Link>
              <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCard