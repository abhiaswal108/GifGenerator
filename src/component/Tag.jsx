import { useEffect, useState } from "react"

import useGIF from "../hook/useGIF"
import Spinner from "./Spinner"
const Tag=()=>{

   const [tag,setInput]=useState('')
function changeHandler(e){
setInput(e.target.value)
}
const {gif,loading,fetchData}=useGIF(tag)

    function clickHandler(){
       fetchData(tag)
    }
return (

     <div className="border border-black w-1/2  bg-blue-400 rounded-lg flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="mt-[15px] text-3xl font-bold uppercase underline">Random GIF</h1>
        {
            loading?(<Spinner/>): (<img src={gif} alt="image" width="450"/>)
        }
       <input className="w-10/12 text-lg py-2 bg-white rounded-lg mb-[3px] text-center" type="text" value={tag} onChange={changeHandler}/>
        <button className="w-10/12 bg-white opacity-90 text-lg p-y-2 rounded-lg mb-[20px]"
         onClick={clickHandler}>Create Gif</button>
     </div>

)
}
export default Tag