import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Commercial from './Commercial';
import { Routes, Route } from "react-router-dom"
import Residential from './Residential';
import Contact from './Contact'
function App() {
  return (
    <div>
       <Navbar />
       <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/commercial' element={<Commercial/>}/>
        <Route path='/residential' element={<Residential/>}/>
        <Route path='/Contact' element={<Contact/>}/>
       </Routes>
        
    </div>
  )
}

export default App
