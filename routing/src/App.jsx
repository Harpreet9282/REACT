import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
function App(){
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<home/>}></Route>
        <Route path='/about' element={<about/>}></Route>
        <Route path='/contact' element={<contact/>}></Route>
      </Routes>
      </BrowserRouter>
      <Home/>
    </>
  )
}

export default App;