import React, { useRef } from "react";

function Form(){
    const nameRef = useRef(null);
    const emailRef=useRef(null);
    function handleSubmit(e){
        
        alert(`Name is ${nameRef.current.value} and email is ${emailRef.current.value}.your form is submitted`)
        
        nameRef.current.value="";
        emailRef.current.value="";
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter name" ref={nameRef}/><br/>
                <input type="email" placeholder="enter email" ref={emailRef}/><br/>
                <button type="submit">Submit</button>
            </form>
        
        </>
    )
}

export default Form;