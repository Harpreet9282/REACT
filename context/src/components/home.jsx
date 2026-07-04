import { useContext} from"react";
import userContext from "../context/userContext";

function Home(){
    const {name,age,marks} = useContext(userContext);
    return(
        <>
        <h1> Name is {name}!</h1>
        <p>Age: {age}</p>
        <p>Marks: {marks}</p>
        </>
    )
}

export default Home;