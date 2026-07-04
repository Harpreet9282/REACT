import { useEffect, useState } from "react";

function App(){
  const [count,setCount]=useState(0);

  useEffect(()=>{
    document.title=`${count}`;
  },[count]);

  // useEffect(() => {
  //   console.log("hello world");
  // },[])
  return(
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}

export default App;