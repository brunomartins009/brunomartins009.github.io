import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import './App.css'

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App