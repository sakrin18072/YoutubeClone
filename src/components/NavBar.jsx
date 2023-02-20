import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
const NavBar = () => {
  return (
    <div className='navbar navbar-dark bg-dark ' style={{position:'sticky',top:'0'}}>
      <Link style={{textDecoration:'none'}} to='/YoutubeClone'><img src='../utils/logo.jpg' style={{width:'100px'}} alt="" /></Link>
      <SearchBar/>
    </div>
  )
}
export default NavBar