import NavBar from "./NavBar"

import SignIn from "./SignIn.jsx"
import HomePage from "./HomePage.jsx"
import { Routes,Route } from "react-router-dom"
import SignUp from "./SignUp.jsx"

function App() {
  
  return (
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/home" element={<HomePage/>}/>

    </Routes>
  )
}

export default App
