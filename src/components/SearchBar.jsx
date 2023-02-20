import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const SearchBar = () => {
    const [searchTerm,setSearchTerm] = useState('')
    let navigate = useNavigate()
    const handleSumbit = (e)=>{
        e.preventDefault();
        navigate(`/YoutubeClone/search/${searchTerm}`)
        setSearchTerm('')
    }
  return (
    <form className='mx-auto d-flex flex-column flex-md-row row-cols-12 row-cols-md-8' onSubmit={handleSumbit} >
        <input type="text" className='p-2 bg-dark text-light '
         style={{margin:'10px',borderRadius:'20px',boxShadow:'none',border:'1.5px solid white'}}
         value = {searchTerm}
         onChange={(e)=>setSearchTerm(e.target.value)}
         />
        <button className='btn btn-light' 
        style={{borderRadius:'25px', padding:'12px', margin:'10px'}}
        type='submit'
        >
            Search
        </button>
    </form>
  )
}

export default SearchBar