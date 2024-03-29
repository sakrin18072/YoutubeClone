import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { Videos } from './'
import { useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {
  const [videos, setVideos] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [err,setErr] = useState('');
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
        setErr('');
      })
      .catch(error => {
        setErr(error);
      })
  }, [selectedCategory])

  return (
    <div className='d-flex flex-column flex-md-row' style={{}} >
      <div className='col-12 col-md-3 col-lg-2 text-light' style={{height:'90vh',overflowY:'scroll'}} >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className='text-light text-center mt-3'>
          Copyright 2023 sakrin
        </div>
      </div>
      
        <div className='col-12 col-md-9 col-lg-10 mt-4' style={{height:'90vh',overflowY:'scroll'}}>
          <span className='text-danger h2' style={{paddingLeft:'21px'}}>{selectedCategory} </span>
          <span className='text-dark h2'>Videos</span>
          <Videos videos={videos} />
        </div>
       
      
    </div>
    
  )
}

export default Feed