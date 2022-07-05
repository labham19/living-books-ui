import React, { useState,useEffect } from 'react'
import Card from '../components/Card'
import JoinBtn from '../components/JoinBtn'

function Landing(props) {
  useEffect(()=>{
    props.showLoader()
  },[]);

  const [courses,setCourses] = useState([
    {
        title:"Python Programming",
        description:"Complete full stack python programming course",
        imgSrc:"https://www.fossmint.com/wp-content/uploads/2020/03/Udemy-Advance-Python-Learning-Courses.png",
        tags:["python","coding","fullstack"]
    },
    {
        title:"Web Development",
        description:"Complete full stack web development course React, Express, MongoDB, Node",
        imgSrc:"https://i.ytimg.com/vi/-Vd5RRZXIyo/maxresdefault.jpg",
        tags:["mern","mongo","react"]
    },
    {
        title:"Machine Learning",
        description:"Complete machine learning course",
        imgSrc:"https://hackr.io/blog/machine-learning-courses/thumbnail/large",
        tags:["machinelearning","algorithm"]
    },
    {
        title:"Video Editing",
        description:"Complete video editing bootcamp for beginners",
        imgSrc:"https://i0.wp.com/101onlinecourses.com/wp-content/uploads/2021/05/Free-Artificial-Intelligence-Online-Courses-for-Beginners-2.jpg",
        tags:["vegas","filmora","premiere"]
    }
  ]);

  return (
    <>
    <div  className='flex flex-col items-center mt-16'>
      <div className='container justify-center my-24 md:w-[75%] flex flex-col md:flex-row md:space-x-6'>
            <div className='md:w-[40%]'> 
               <img src='pictures/laptop.png'/>
            </div>

           <div className='md:w-[60%] p-4 text-center md:text-left'>
               
               <h1 className='font-bold my-4 text-3xl  md:text-4xl lg:text-6xl'>World Quality Education Platform</h1>

               <h2 className='my-4'> Living books is an online learning platform that provides world class learning materials and courses for absolutely free. Join now to start ypur journey into the world of knowledge and skill. All the courses and programs are tought by world reknowned teachers who are experts in their fields. </h2>
               
               <JoinBtn/>
           </div>
      </div>

      <div className='mb-14 mt-28 bg-blue-50 py-14 w-full px-4'>
           <h1 className='font-bold mb-10 text-3xl text-center'>We collaborate with <span className='text-pink-500 hover:underline cursor-pointer'>100+ universities and companies</span></h1>
           <div className='flex flex-col space-y-10 space-x-0 md:flex-row md:space-y-0 md:space-x-20 items-center'>
              <img alt='' className='w-[40%] md:w-[14%]' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6JHlaxZYPoXl6zcTdX5cUs/3d3c073f0b162c24e56712a98dc43c0f/illinois.svg?auto=format%2Ccompress&dpr=2&w=&h=32'/>
              <img alt='' className='w-[40%] md:w-[14%]' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3L6Yc78fmNIFF3gVCvSDQg/a2a9912f5a449cabb9ef31f387435df2/duke_updated_2020.png?auto=format%2Ccompress&dpr=2&w=&h=32' />
              <img alt='' className='w-[40%] md:w-[14%]' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=2&w=&h=37' />
              <img alt='' className='w-[40%] md:w-[14%]' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4adnkcJIgVKTinBB0j9GF8/5fe5eecf60bf305dd0a7ce40bb721cd9/ibm.png?auto=format%2Ccompress&dpr=2&w=&h=32' />
              <img alt='' className='w-[40%] md:w-[14%]' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/FHOd44z40jTFsSSao84AM/d1e357f5650a23bf2936114112d44445/imperial.png?auto=format%2Ccompress&dpr=2&w=&h=35' />
              <img alt='' className='w-[40%] md:w-[14%]' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4FSFmNXuDIzTvFb7n0v4mK/704ae9e0a7981fb6415f4cb4609bbbb3/stanford.svg?auto=format%2Ccompress&dpr=2&w=&h=27' />
           </div>
      </div>


      <div className='my-20 bg-blue-50 py-20 w-full px-4'>
           <h1 className='font-bold mb-10 text-3xl text-center'><span className='text-pink-500 cursor-pointer'>Thousands of courses to choose from</span></h1>
           
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-6 md:space-y-0'>
           {
            courses.map(course=>{
                return <Card key={course.title} course={course}></Card>
            })
           }    
           </div> 
      </div>


      <div className='my-20 flex md:flex-row md:justify-evenly items-center flex-col-reverse bg-blue-50 py-12 w-full px-4 text-center'>
           <div>
                <h1 className='font-serif my-10 text-xl md:text-3xl text-center'>What are you waiting for ?</h1>
                <JoinBtn/>
           </div>
           <div className='md:w-[20%]'>
             <img src='pictures/teachers.png'/>
           </div>
      </div>

      <div className='mt-20 flex md:flex-row md:justify-evenly items-center flex-col-reverse bg-pink-300 py-12 w-full px-4 text-center'>
           All rights reserved by Living Books Pvt. Ltd. &copy; 
      </div>

    </div>
    </>
  )
}

export default Landing
