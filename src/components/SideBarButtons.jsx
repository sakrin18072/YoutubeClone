import React from 'react'

const SideBarButtons = ({ category,selectedCategory,setSelectedCategory }) => {
    return (
        <div className='p-3 btn text-light text-left' onClick={() => { setSelectedCategory(category.name) }}
            style={{ backgroundColor: selectedCategory === category.name ? 'red' : '#212529', borderRadius: '25px' }} key={category.name}>
            <span className='p-3' style={{ color: selectedCategory === category.name ? 'white' : 'red' }}>{category.icon}</span>
            <span>{category.name}</span>
        </div>
    )
}

export default SideBarButtons