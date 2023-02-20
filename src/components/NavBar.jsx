import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
const NavBar = () => {
  return (
    <div className='navbar navbar-dark bg-dark ' >
      <Link style={{textDecoration:'none'}} to='/YoutubeClone'><img src='https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png' style={{width:'100px'}} alt="" /></Link>
      <SearchBar/>
    </div>
  )
}
export default NavBar