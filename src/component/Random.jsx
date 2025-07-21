
import axios from "axios"
import Spinner from "./Spinner"
import useGIF from "../hook/useGIF"
const Apikey='Myq6OtvoAnmg7abEYiowjSjjzAxje7VH'
const Random=()=>{
const {gif,loading,fetchData}=useGIF()
    function clickHandler(){
       fetchData()
    }
return (

     <div className="border border-black w-1/2  bg-green-400 rounded-lg flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="mt-[15px] text-3xl font-bold uppercase underline">Random GIF</h1>
        {
            loading?(<Spinner/>): (<img src={gif} alt="image" width="450"/>)
        }
       
        <button className="w-10/12 bg-white opacity-90 text-lg p-y-2 rounded-lg mb-[20px]"
         onClick={clickHandler}>Create Gif</button>
     </div>

)
}
export default Random