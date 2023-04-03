import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
const NavBar = () => {
  return (
    <div className='shadow d-flex flex-md-row p-2 flex-col' style={{position:'sticky',top:'0'}}>
      <Link className='pt-3' style={{textDecoration:'none', paddingLeft:'10px'}} to='/YoutubeClone'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png' style={{width:'45px'}} alt="" /></Link>
      <SearchBar/>
    </div>
  )
}
export default NavBar