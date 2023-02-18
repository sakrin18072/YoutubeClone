import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
const ChannelCard = ({ channel ,MarginTop}) => {
  return (
    
    <>
      <div className='m-3 p-3 row text-light mx-auto' style={{ borderRadius: '25px', border: '2px solif gray',height:'260px'}} >
        <div className='col d-flex flex-column justify-content-center' style={{height:'180px',width:'358px'}}>
          
            <img className='mx-auto' style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px', border: 'none', borderRadius: '50%',height:'80%',bottom:0,objectFit:'fill',marginTop:MarginTop }}
              src={channel?.snippet?.thumbnails?.medium?.url} alt="" />
          
          <div className='p-2 text-center' style={{ height: '80px', borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px' ,}}>
            <div className='p-1'>
              <Link className='text-light' style={{ textDecoration: 'none' }}
                to={`/channel/${channel?.id?.channelId}`}>{channel?.snippet?.title.slice(0, 40)}</Link>
              <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />
            </div>
            {/* <div className='p-2 text-center'>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} subscribers
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ChannelCard