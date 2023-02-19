import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
const NavBar = () => {
  return (
    <div className='bg-dark d-flex align-items-center p-3 w-100' style={{position:'sticky',top:'0',margin:'0',right:'0',left:'0'}}>
      <Link style={{textDecoration:'none'}} to='/YoutubeClone'><img src='https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png' style={{width:'100px'}} alt="" /></Link>
      <SearchBar/>
    </div>
  )
}
export default NavBar