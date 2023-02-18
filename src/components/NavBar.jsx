import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
const NavBar = () => {
  return (
    <div className='bg-dark d-flex align-items-center p-3 w-100' style={{position:'sticky',top:'0'}}>
      <Link to='/'><img src={logo} style={{width:'45px'}} alt="" /></Link>
      <SearchBar/>
    </div>
  )
}

export default NavBar