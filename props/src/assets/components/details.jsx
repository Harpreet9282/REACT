function Details(){

    let isLoggedIn= true;

    /*if(isLoggedIn){
        return<h1>Welcome Back</h1>
    }
    return<h1>Register to access the website</h1>
}

//2nd methodternary operator

let result=isLoggedIn ?'welcome back':'register to acces website';
return(
    <>
    <h1>{result}</h1>
    </>
)*/

//3rs method logical and

return(
    <>
    {isLoggedIn && <h1>welcome back</h1>}
    </>
)
}
export default Details;