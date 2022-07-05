import React, { useState,useEffect } from 'react'

function Completed(props) {
  useEffect(()=>{
    props.showLoader()
  },[]);
  const [courses,setCourses] = useState([
    {
        title:"Calisthenics",
        description:"Complete strength building program",
        imgSrc:"https://downloadfreecourse.com/uploads/images/2020/webp/image_750x_5eca0c09cab4e.webp",
        tags:["homeworkout"]
    }
  ]);
  return (
    <div className=''>
      <div className='w-full md:px-4'>
          
          {
            courses.map(course=>{
              return <div className='w-full md:h-44 border-b-2 border-slate-400 py-6 md:p-2  px-2 flex flex-col md:flex-row hover:bg-slate-200'>
                   <div className="w-full md:w-40 lg:w-[20%] md:h-full p-2">
                      <img className="w-full h-full" src={course.imgSrc} alt={course.title}/>
                   </div>

                   <div className="p-4">
                        <h1 className="text-2xl text-slate-500">{course.title}</h1>
                        <h3 className="">{course.description}</h3>
                        <div className="my-5">
                          <progress type="progress"  value={course.progress} min="0" max="100" /> 

                          <i className="fa fa-play-circle active:text-pink-300 fa-xl text-pink-500 hover:scale-110 hover:text-pink-600 cursor-pointer mx-4" aria-hidden="true"></i>  <i className="fa fa-check-circle fa-xl text-green-500" aria-hidden="true"></i>
                        </div>
                   </div>
                  
              </div>
            })
           } 
          
      </div>
    </div>
  )
}

export default Completed
