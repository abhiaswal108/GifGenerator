import { useEffect, useState } from "react"
import axios from "axios"
const useGIF=(tag)=>{
 const [gif,setGif]=useState('')
 const [loading,setLoading]=useState(false)

 const url=`https://api.giphy.com/v1/gifs/random?api_key=Myq6OtvoAnmg7abEYiowjSjjzAxje7VH`
async function fetchData(tag){
    setLoading(true)

const {data}=await axios.get(tag?`${url}&tag=${tag}`:url)
console.log(data)
const imageSourse=data.data.images.downsized_large.url
console.log(imageSourse)
setGif(imageSourse)
setLoading(false)
}
useEffect(()=>{
    fetchData(tag)
},[])
return {gif,loading,fetchData}
}
export default useGIF