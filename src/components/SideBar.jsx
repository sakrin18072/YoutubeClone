import { Stack } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { categories } from '../utils/constants'
const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <div className='' style={{paddingRight:'10px',borderRight:'2px solid gray'}}>
      {
        categories.map(category=>(
          <div className='p-3 btn text-light text-left w-100' onClick={()=>{setSelectedCategory(category.name)}}
            style={{backgroundColor:selectedCategory===category.name?'red':'#212529',borderRadius:'25px'}} key={category.name}>
            <span className='p-3' style={{color:selectedCategory===category.name?'white':'red'}}>{category.icon}</span>
            <span>{category.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default SideBar