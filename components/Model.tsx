"use client"
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { toggleModel } from '@/lib/slices/imagesSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { IoMdArrowRoundDown, IoMdClose } from 'react-icons/io'
import { LiaCommentSolid } from 'react-icons/lia'



const Model = () => {
  const dispatch = useAppDispatch()
  const {model,imageDetails} = useAppSelector(state =>state.imagesSlice)

  return model ? (
    <div className='fixed p-6 inset-0 w-full h-full bg-black/35 backdrop-blur flex justify-center items-center '>

      <IoMdClose onClick={()=>dispatch(toggleModel())} className='absolute top-4 text-[24px] right-4 cursor-pointer text-white' />

      {imageDetails && <div className='relative overflow-auto w-[1200px] max-h-[85vh] bg-[#FFFFFF]  rounded-lg  py-[80x]'>
        
        <div className=' flex justify-between items-center px-5 py-8 flex-wrap gap-5'>
          <div className='flex items-center justify-center space-x-4'>
        <img className='w-[54px] h-[54px] rounded-full' src={imageDetails?.userImageURL} alt="" />
        <div>
          <h1 className='text-lg'>{imageDetails?.user}</h1>
          <div className='flex space-x-2 items-center'>
            <h1 className='text-lg text-gray-500'>Follow</h1>
            <span className='bg-gray-600 w-[4px] h-[4px] rounded-full'></span>
            <h1 className='text-lg text-gray-500'>Donate</h1>
          </div>
        </div>
          </div>
         
          <div className='flex items-center gap-5 flex-wrap'>
          <span className='text-lg font-medium px-5 py-3 rounded-lg border border-gray-300 flex items-center space-x-2 '>
            <span><LiaCommentSolid className='text-gray-500' size={22} /></span>       
            <span>Comments</span>
            <span className='text-gray-400'>{imageDetails?.comments}</span>
           
          </span>
          <span className='px-5 py-3 rounded-lg text-lg font-medium border border-gray-300 flex items-center space-x-2'>
            <span><AiOutlineLike className='text-gray-500' size={22} /></span>
            <span className='text-lg font-medium'>Likes</span>
             <span className='text-md text-gray-400 ml-1'>{imageDetails?.likes}K</span>
             </span>
          <span className='px-5 py-3 rounded-lg text-lg font-medium border border-gray-300 flex items-center space-x-2'>
            <span><IoMdArrowRoundDown className='text-gray-400' size={22} /></span>
            <span>Downloads</span>
            <span>{imageDetails?.downloads}</span>
            </span>
          <button className='text-md bg-[#05A081] text-white px-5 py-[10px] rounded-lg flex items-center space-x-4'>
            <a  href={imageDetails?.previewURL} download={imageDetails?.previewURL} ><span>Free Download</span></a>
            <div className='flex items-center space-x-2'>
              <span className='w-[2px] h-8 bg-gray-500'></span>
              <IoMdArrowRoundDown size={22} />
            </div>
          </button>
          </div>
          
        </div>
          <div className='p-5'>
          <Image className='mx-auto rounded-sm'  src={imageDetails?.webformatURL} alt='image details' width={imageDetails.webformatWidth} height={imageDetails.webformatHeight}/>
          </div>
          
        </div>}
      </div>
    
  ) : ""
}

export default Model
