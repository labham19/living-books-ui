import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

import Navbar from "./components/Navbar";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import Dashboard from "./pages/Dashboard";
import Faq from "./pages/Faq";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  const [progress,setProgress]=useState(0);

  useEffect(()=>{
    showLoader()
   },[]);

   const showLoader = () =>{
      setProgress(50);
      setTimeout(()=>{
        setProgress(100);
      },500)
   }
  return (
    <>
    
    <div className="App">
       <Router>
        <Navbar/>
        <LoadingBar color='rgb(220 163 240)' className="mt-16"  progress={progress} />
             
           <Routes>
             <Route  path="/" element={<Landing showLoader={showLoader}/>}></Route>
             <Route  path="/dashboard" element={<Dashboard showLoader={showLoader}/>}></Route>
             <Route  path="/about" element={<About showLoader={showLoader}/>}></Route>
             <Route  path="/faq" element={<Faq showLoader={showLoader}/>}></Route>
             <Route  path="/login" element={<Login showLoader={showLoader}/>}></Route>
             <Route  path="/signup" element={<Signup showLoader={showLoader}/>}></Route>
             <Route  path="/coursedetails" element={<CourseDetails showLoader={showLoader}/>}></Route>
           </Routes>
       </Router>
    </div>
    </>
    
  );
}

export default App;
