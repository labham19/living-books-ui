import React, { useState } from 'react'
import { useEffect } from "react";
import Completed from './Completed';
import Courses from './Courses';
import Progress from './Progress';

function Dashboard(props) {
  useEffect(()=>{
    props.showLoader()
  },[]);

  const [display,setDisplay] = useState('Courses');
  
  return (
    <div className='flex justify-center mt-24'>
       <div className='container p-2 md:p-10'>
           <div className='text-center'>
               <span onClick={()=>setDisplay('Courses')} className={`py-2 px-1 md:py-3 md:px-4 ${(display==='Courses')?'bg-pink-400':'bg-pink-200'} active:bg-pink-400  hover:bg-pink-300 mx-2 rounded-lg cursor-pointer`}>Courses</span>
               <span onClick={()=>setDisplay('Progress')} className={`py-2 px-1 md:py-3 md:px-4 ${(display==='Progress')?'bg-pink-400':'bg-pink-200'} active:bg-pink-400  hover:bg-pink-300 mx-2 rounded-lg cursor-pointer`}>Progress</span>
               <span onClick={()=>setDisplay('Completed')} className={`py-2 px-1 md:py-3 md:px-4 ${(display==='Completed')?'bg-pink-400':'bg-pink-200'} active:bg-pink-400  hover:bg-pink-300 mx-2 rounded-lg cursor-pointer`}>Completed</span>
               <hr className='my-5'/>
           </div>

           <div>
            <h1 className='md:text-2xl mb-5 text-slate-500'>{display}</h1>
            {
              display==='Courses' && 
              <Courses showLoader={props.showLoader}/>
            }
            {
              display==='Progress' && 
              <Progress showLoader={props.showLoader}/>
            }
            {
              display==='Completed' && 
              <Completed showLoader={props.showLoader}/>
            }
           </div>
       </div>
      
    </div>
  )
}

export default Dashboard
