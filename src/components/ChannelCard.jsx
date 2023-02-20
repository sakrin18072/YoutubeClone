import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
const ChannelCard = ({ channel ,MarginTop}) => {
  return (
    
    <>
      <div className='m-3 p-3 row text-light mx-auto align-content-center' style={{ borderRadius: '25px', border: '2px solif gray',height:'260px'}} >
        <div className='col d-flex flex-column justify-content-center' style={{height:'142px',width:'256px'}}>
          
            <img className='mx-auto' style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px', border: 'none', borderRadius: '50%',height:'80%',bottom:0,objectFit:'fill',marginTop:MarginTop }}
              src={channel?.snippet?.thumbnails?.medium?.url} alt="" />
          
          <div className=' text-center' style={{ height: '80px', borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px' ,}}>
            
              <Link className='text-light' style={{ textDecoration: 'none' }}
                to={`/YoutubeClone/channel/${channel?.id?.channelId}`}>{channel?.snippet?.title.slice(0, 40)}
                <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />
              </Link>
              
            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default ChannelCard