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
    <div className='d-flex' style={{overflowX:'hidden'}}>
      <div className='col-12 col-md-3 col-lg-2 bg-dark text-light' style={{height:'92vh',overflowY:'scroll'}} >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className='text-light text-center mt-3'>
          Copyright 2023 sakrin
        </div>
      </div>
      
        <div className='col-12 col-md-9 col-lg-10 bg-dark' style={{height:'92vh',overflowY:'scroll'}}>
          <span className='text-danger h2'>{selectedCategory} </span>
          <span className='text-light h2'>Videos</span>
          <Videos videos={videos} />
        </div>
       
      
    </div>
    
  )
}

export default Feed