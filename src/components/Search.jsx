import React, { useEffect } from 'react'
import { Videos } from './'
import { useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
const Search = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      })
      .catch(error => {
        console.log(error)
      })
  }, [searchTerm])

  return (
    <div className=' col-md-10 bg-dark w-100  d-flex flex-column justify-content-center' style={{ overflowY: 'hidden' }}>
      <div className='display-6' style={{ marginLeft: '15px' }}>
        <span className='text-light'>Search Results for </span>
        <span className='text-danger'>{searchTerm}</span>
      </div>
      <div className='container ' >
      <Videos videos={videos} />
      </div>
    </div>
  )
}

export default Search