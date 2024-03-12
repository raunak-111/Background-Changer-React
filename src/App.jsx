import { useState } from "react"

function App() {
  const [color, setcolor] = useState("aqua");

  return (
    
   <div className="w-full h-screen "
   style={{backgroundColor : color}}>
    <div className="h-screen flex flex-col justify-center items-center font-bold text-4xl">
    <h1 >Hello everyone!!</h1>
    <p className=" text-xl font-semibold">Use following buttons to change the background</p>
    </div>
    <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-3" >
    <div className="flex flex-wrap justify-center bg-white px-6 py-2 rounded-md shadow-lg gap-3">
      <button onClick={()=> setcolor("red")} className=" outline-none px-2 py-1 rounded-3xl shadow-lg text-white" style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=> setcolor("blue")}className=" outline-none px-2 py-1 rounded-3xl shadow-lg text-white" style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={()=> setcolor("green")}className=" outline-none px-2 py-1 rounded-3xl shadow-lg text-white" style={{backgroundColor:"green"}}>Green</button>
      <button onClick={()=> setcolor("grey")}className=" outline-none px-2 py-1 rounded-3xl shadow-lg text-white" style={{backgroundColor:"grey"}}>Grey</button>
      <button onClick={()=> setcolor("white")}className=" outline-none px-2 py-1 rounded-3xl shadow-lg text-black" style={{backgroundColor:"white"}}>White</button>
      <button onClick={()=> setcolor("yellow")}className=" outline-none px-2 py-1 rounded-3xl shadow-lg text-black" style={{backgroundColor:"yellow"}}>Yellow</button>
      <button onClick={()=> setcolor("orange")}className=" outline-none px-2 py-1 rounded-3xl shadow-lg text-white" style={{backgroundColor:"orange"}}>Orange</button>
    </div>
    </div>
   
   </div>
  
  

  )
}

export default App
