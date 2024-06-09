import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useAppDispatch } from "@/lib/hooks"
import { setSearchType } from "@/lib/slices/imagesSlice"


const SearchOptions = () => {
    const dispatch = useAppDispatch()
    const changeOptions = (value:string) => {
dispatch(setSearchType(value))
    }
  return (
    <div>
      <Select defaultValue={"images"} onValueChange={changeOptions}>
  <SelectTrigger className="w-[100px] md:w-[140px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="images">Images</SelectItem>
    <SelectItem value="videos">Videos</SelectItem>
   
  </SelectContent>
</Select>
    </div>
  )
}

export default SearchOptions


  