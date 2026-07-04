import { useState } from "react";
import Form from"./components/form";
function App(){
    
    const [isDark,setIsDark]= useState(true);
    return(
        /*<>
        
            <body style={{
                backgroundColor:isDark?'black':'white',
                color:isDark?'white':'black'
            }}>
                <h1>This is a react code</h1>
                <button onClick={()=>setIsDark(!isDark)}>toggle theme</button>
            </body>
            <Form/>
        </>*/
        <>
        <Form/>
        </>
    )
}

export default App;