import { useEffect, useState } from "react";
function Progress(props) {
  useEffect(()=>{
    props.showLoader()
  },[]);
  const [courses,setCourses] = useState([
    {
        title:"Python Programming",
        description:"Complete full stack python programming course",
        imgSrc:"https://www.fossmint.com/wp-content/uploads/2020/03/Udemy-Advance-Python-Learning-Courses.png",
        tags:["python","coding","fullstack"],
        progress:60
    },
    {
        title:"Web Development",
        description:"Complete full stack web development course React, Express, MongoDB, Node",
        imgSrc:"https://i.ytimg.com/vi/-Vd5RRZXIyo/maxresdefault.jpg",
        tags:["mern","mongo","react"],
        progress:20
    },
    {
        title:"Calisthenics",
        description:"Complete strength building program",
        imgSrc:"https://downloadfreecourse.com/uploads/images/2020/webp/image_750x_5eca0c09cab4e.webp",
        tags:["homeworkout"],
        progress:100
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
                          <progress type="progress" className="w-44"  value={course.progress} min="0" max="100" /> 

                          <i className="fa fa-play-circle active:text-pink-300 fa-xl text-pink-500 hover:scale-110 hover:text-pink-600 cursor-pointer mx-4" aria-hidden="true"></i>  
                        </div>
                   </div>
                  
              </div>
            })
           } 
          
      </div>
    </div>
  )
}

export default Progress
