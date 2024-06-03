"use client"
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import Navebar from './Navebar';
import axios from 'axios';
import { useAppDispatch } from '@/lib/hooks';
import { setImages, setLoader } from '@/lib/slices/imagesSlice';

const Main = () => {
 const [keywords, setKeywords] = useState([
  "flowers",
  "mountains",
  "building",
  "technology",
  "cities"
 ])
  const [query,setQuery]=useState('')
  // const [keyWords,setKeyWords]=useState(["animals","mobiles","nature","mountains","technalogy"])
  // dispatch(setLoading(true))
 const dispatch = useAppDispatch()
 const Search = async() => {
  dispatch(setLoader())
  try{
    const {data}=await axios.get(`https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_KEY}&q=${query}&image_type=photo`)
    
    dispatch(setLoader())
    if(data.hits){
     dispatch(setImages(data.hits))
      // dispatch(setImages(data.hits))
    }
   
    
  }
  catch(error){
  dispatch(setLoader())
        console.log(error)
        // setLoading(false)
  }
  
 }
 useEffect(() => {
  const index = Math.floor(Math.random()*keywords.length)
  setQuery(keywords[index])
  Search()
 }, [])
  return (
    <div className='relative bg-[url("/bg.jpg")] bg-cover bg-no-repeat flex items-center justify-center  h-[500px] '>
      <Navebar/>
      <div>
        <h1 className='text-[35px] font-bold text-white'>Stunning royalty-free images & royalty-free stock</h1>
        <p className='text-medium font-normal text-white mt-2'>Over 4.5 million+ high quality stock images, videos and music shared by our talented community.</p>
        <div className='w-full bg-white rounded-full flex items-center space-x-3 mt-10 px-3'>
        <IoIosSearch className='text-green-500' size={30} />
        <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" className='flex-1 w-full h-[60px] rounded-full outline-none  ' placeholder='Search for all images on Pixabay' />
        <button onClick={Search} className='px-4 py-2 bg-green-500 rounded-full text-white'>Search</button>
        </div>
        
      </div>
      
       {}
     
    </div>
  )
}

export default Main
