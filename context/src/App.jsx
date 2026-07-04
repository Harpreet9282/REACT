import Home from "./components/home";
import userContext from "./context/userContext";

function App(){
  return(
    <>
    <userContext.Provider value={{
      name: "John Doe",
      age: 25,
      marks: 85
    }}>
      <Home></Home>
    </userContext.Provider>
    </>
  )
}

export default App;