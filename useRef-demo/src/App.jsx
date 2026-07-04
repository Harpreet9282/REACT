import {useRef} from "react";
import Forms from"../src/components/forms";
function App(){
  const inputRef=useRef(null);
  
  function focus(){
    inputRef.current.focus();
  }
  return(
    <>
    <input ref={inputRef} placeholder="enter name" /><br/>
    <button onClick={focus}>Submit</button><br/><br/>
    <Forms/>
    </>
  )
}

export default App;