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
    <form className='justify-content-center mx-auto d-flex flex-column flex-md-row  w-100' onSubmit={handleSumbit} >
        <input type="text" className='ml-auto p-2 bg-dark text-light col-11 col-md-5'
         style={{margin:'10px',borderRadius:'20px',boxShadow:'none',border:'1.5px solid white'}}
         value = {searchTerm}
         onChange={(e)=>setSearchTerm(e.target.value)}
         />
        <button className='ml-auto btn btn-light col-11 col-md-1' 
        style={{borderRadius:'25px', padding:'12px', margin:'10px'}}
        type='submit'
        >
            Search
        </button>
    </form>
  )
}

export default SearchBar