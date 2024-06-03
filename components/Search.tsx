import axios from 'axios'
import React, { useState } from 'react'

const Search = async() => {
  const [query,setQuery]=useState('')
    // const [keyWords,setKeyWords]=useState(["animals","mobiles","nature","mountains","technalogy"])
    // dispatch(setLoading(true))
    console.log('data')
    try{
      const {data}=await axios.get(`https://pixabay.com/api/?key=26805567-1cf7fc18ec0e93cd1652984de&q=yellow+flowers&image_type=photo`)
      
      // dispatch(setLoading(false))
      if(data.hits){
       console.log('data')
        // dispatch(setImages(data.hits))
      }
     
      
    }
    catch(error){
          console.log(error)
          // setLoading(false)
    }

  return (
    <div >
      <input className='outline-none' type="text" />
    </div>
  )
}

export default Search
