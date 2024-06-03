"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setImageDetails, toggleModel } from "@/lib/slices/imagesSlice"
import Image from "next/image"
import { useState } from "react"
import Masonry from "react-masonry-css"
import Spinner from "./Spinner"


const Result = () => {
 
const Dispatch = useAppDispatch()
    const {images} = useAppSelector(state =>state.imagesSlice)
    const {loader} = useAppSelector(state =>state.imagesSlice)
    console.log(images)

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
      
  return (
    
    <div className="max-w-[1300px] px-6 mx-auto  py-12 ">
      {loader ? <Spinner/> :
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid "
        columnClassName="my-masonry-grid_column"
        
      >
      
      {images.map((data)=> {
          return (
              <div key={data.id} className='space-y-3'>
                   <Image className='cursor-pointer' onClick={()=> {
                    Dispatch(toggleModel())
                    Dispatch(setImageDetails(data.id))
                   }}  src={data.webformatURL} width={data.webformatWidth} height={data.webformatHeight} alt=""/>
              </div>
             
          )
      })}
       </Masonry>
      }


    </div>
  )
}

export default Result