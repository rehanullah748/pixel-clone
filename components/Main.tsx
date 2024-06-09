"use client"
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import Navebar from './Navebar';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setImages, setLoader } from '@/lib/slices/imagesSlice';
import SearchOptions from './SearchOptions';

const Main = () => {
  const { searchType } = useAppSelector((state) => state.imagesSlice)
  console.log(searchType)
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
 const Search = async(e:any) => {
  if(e.key === "Enter") {
    dispatch(setLoader())
  
    try{
      if(searchType === "images") {
        const {data}=await axios.get(`https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_KEY}&q=${query}&image_type=photo`)
      
      
        if(data.hits){
         dispatch(setImages(data.hits))
          // dispatch(setImages(data.hits))
        }
      }
      dispatch(setLoader())
     
      
    }
    catch(error){
    dispatch(setLoader())
          console.log(error)
          // setLoading(false)
    }
  }
  
  
 }
 useEffect(() => {
  const index = Math.floor(Math.random()*keywords.length)
  setQuery(keywords[index])
  // Search()
 }, [])
  return (
    <div className='relative bg-[url("/mobile.jpg")] md:bg-[url("/bg.jpg")] bg-cover bg-no-repeat flex items-center justify-center  h-[500px] '>
      <Navebar/>
      <div>
        <h1 className='text-[27px] md:text-[35px] font-bold text-white px-3 lg:px-0 leading-[27px] '>Stunning royalty-free images & royalty-free stock</h1>
        <p className='text-[18px] md:text-[20px] font-normal text-white mt-2 px-3 lg:px-0 leading-6 md:leading-[20px]'>Over 4.5 million+ high quality stock images, videos and music shared by our talented community.</p>
        <div className='w-[95%] mx-auto  md:w-full bg-white rounded-full flex items-center justify-center space-x-3 mt-10 px-3 '>
        <IoIosSearch className='text-green-500' size={30} />
        <input value={query} onKeyDown={Search} onChange={(e)=>setQuery(e.target.value)} type="text" className='flex-1 w-full h-[60px] rounded-full outline-none  ' placeholder='Search for all images on Pixabay' />
        <SearchOptions/>
        </div>
        
      </div>
      
       {}
     
    </div>
  )
}

export default Main
