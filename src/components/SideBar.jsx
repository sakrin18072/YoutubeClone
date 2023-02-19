import { Stack } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { categories } from '../utils/constants'
const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <div className='d-flex flex-column' style={{padding:'10px'}}>
      {
        categories.map(category=>(
          <div className='p-3 btn text-light d-flex flex-row' onClick={()=>{setSelectedCategory(category.name)}}
            style={{overflow:'visible',display:'block',backgroundColor:selectedCategory===category.name?'red':'#212529',borderRadius:'25px',overflowY: 'scroll'}}  key={category.name}>
            <span className='' style={{color:selectedCategory===category.name?'white':'red'}}>{category.icon}&nbsp;</span>
            <span>{category.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default SideBar