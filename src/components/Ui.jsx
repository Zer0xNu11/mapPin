import { useRef, useState } from "react";
import Map from "./Map";

export const Ui = () =>{
  const [val, setVal] = useState('');
  const clearVal = () =>{setVal('')};
  const postRef = useRef(null);
  const handleClcikPostButton = ()=> {
    postRef.current.posting();
    clearVal();
  }
  
  return(
    <>
    <div className="flex flex-col items-center bg-gray-400 ">
    <div
    className="bg-gray-700 w-[440px] p-5 rounded-2xl  "
    >
      <Map
      postVal = {val}
      ref = {postRef}
      />
    </div>
    <div className="flex flex-col pt-4">
      <textarea 
      className="border border-black w-64 h-32 "
      id=""
      placeholder="出来事などをシェアしよう"
      value={val}
      onChange={(e)=>{setVal(e.target.value)}}
      />
      <button
      className=" bg-gray-700 rounded-xl  shadow-black/80 shadow-md  w-auto mx-auto hover:opacity-70 transition active:translate-y-1 active:shadow-none active:opacity-40 text-white m-4 py-2 px-4"
      onClick={handleClcikPostButton}
      >
        投稿
      </button>
    </div>
    </div>
    </>
  )

}