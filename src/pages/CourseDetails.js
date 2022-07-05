import React, { useEffect,useState } from 'react'

function CourseDetails(props) {
    const [course,setCourse] = useState({
      title:"Web Development",
      description:"Complete full stack web development course React, Express, MongoDB, Node",
      imgSrc:"https://i.ytimg.com/vi/-Vd5RRZXIyo/maxresdefault.jpg",
      tags:["mern","mongo","react"],
      topics:["HTML","CSS","Javascript","ReactJs","MongoDB","Express","Node Js"],
      duration:60,
      totalVideos:75,
      language:"English",
      reviews:4,
      oppurtunities:["Web Developer","Software Engineer","UI/UX Designer","Frontend","Backend Developer"]
  })
    useEffect(()=>{
        props.showLoader()
    },[]);
  return (
    <div className='flex flex-col justify-center  mt-16'>
      <div className='bg-purple-200 shadow-md shadow-slate-400 min-h-96 w-full flex flex-col items-center md:flex-row md:justify-evenly'>
         <div className=''>
             <img className='w-[200px] mx-6 my-6 h-[200px] md:w-[300px] md:h-[300px] rounded-full shadow-black shadow-lg' src={course.imgSrc}/>
         </div>
         <div className='p-5 text-center md:text-left'>
                    <h1 className="my-2 text-2xl text-slate-600">{course.title}</h1>
                    <h3 className="my-2 ">{course.description}</h3>
                    <div className='my-2 '>
                      {
                        course.tags.map(ele=>{
                            return  <span key={ele} className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-slate-600 mr-2 mb-2">#{ele}</span>
                        })
                      }
                    </div>
         </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-stretch md:justify-items-center my-9 mx-5 '>
           <div className='shadow-slate-400 w-full  shadow-md rounded-lg my-4 md:col-span-3 px-5 bg-pink-50 transition-all ease-in-out duration-1000 hover:bg-pink-100'>
               <h1 className='text-center my-5 text-slate-600 md:text-2xl font-bold'>What all you will learn ?</h1>
               <div className='flex flex-row justify-evenly'>
               <div className='inline-block'>
                      {
                        course.topics.map(ele=>{
                            return  <h1 key={ele} className="rounded-full px-3 py-1 text-sm font-semibold text-slate-600 mr-2 mb-2">{ele}</h1>
                        })
                      }
               </div>
               <img alt='' className='w-32 md:w-52' src='pictures/teacher.png'/>
               </div>
           </div>

           <div className='shadow-slate-400 col-span-1 shadow-md  my-4rounded-lg text-center px-5 bg-pink-50  transition-all ease-in-out duration-1000 hover:bg-pink-100'>
              <h1 className='text-center my-5 text-slate-600 md:text-2xl font-bold'>Oppurtunities</h1>
              <div>
                      {
                        course.oppurtunities.map(ele=>{
                            return  <h1 key={ele} className="rounded-full px-3 py-1 text-sm font-semibold text-slate-600 mr-2 mb-2">{ele}</h1>
                        })
                      }
               </div>
           </div>

           <div className='shadow-slate-400 shadow-md rounded-lg my-4 text-center px-5 bg-pink-50  transition-all ease-in-out duration-1000 hover:bg-pink-100'>
              <h1 className='text-center my-5 text-slate-600 md:text-2xl font-bold'>What you get ?</h1>
               <div className='p-2 md:p-6 w-full'>
                  <i className="fas fa-video    "></i>
                  <span className='mx-6'>Total Videos : {course.totalVideos}</span>
               </div>
               <div className='p-2 md:p-6 w-full'>
                  <i className="fas fa-clock    "></i>
                  <span className='mx-6'>Duration : {course.duration} hours</span>
               </div>
               <div className='p-2 md:p-6 w-full'>
                  <i className="fa fa-microphone" aria-hidden="true"></i>
                  <span className='mx-6'>Language : {course.language} </span>
               </div>
           </div>
      </div>

      <div className='flex justify-center my-5'>
        <button className='border-2 w-52 px-6 py-3 border-red-500 bg-pink-500 text-white font-bold hover:text-pink-600 hover:bg-transparent hover:border-pink-500 transition-all ease-in-out duration-1000 rounded-md '>Begin Course</button>
      </div>
    </div>
  )
}

export default CourseDetails
