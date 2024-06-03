import { ImageInterface } from '@/types/Index'
import { createSlice } from '@reduxjs/toolkit'


export interface ImageType {
  images: ImageInterface[]
  model: boolean,
  imageDetails: ImageInterface | null,
  loader: boolean
}

const initialState: ImageType = {
  images:[],
  model:false,
  imageDetails: null,
  loader: false
  

}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImages: (state, {payload}) => {
        console.log(payload)
        state.images = payload
    },
    toggleModel: (state) => {
        state.model = !state.model;
    },
    setImageDetails: (state,{payload}) => {
      const image = state.images.find((data)=>data.id === payload)
      if(image) {
        state.imageDetails = image
      }
    },
    setLoader: (state) => {
      state.loader = !state.loader
          }
}})

// Action creators are generated for each case reducer function
export const { setImages, toggleModel, setImageDetails, setLoader } = imageSlice.actions

export default imageSlice.reducer