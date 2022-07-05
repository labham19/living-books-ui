import React,{useState,useEffect} from 'react'
import Card from '../components/Card'

function Courses(props) {
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
        },
        {
            title:"Data Structure and algorithms",
            description:"Complete Data Structures and Algorithms Course",
            imgSrc:"https://i.ytimg.com/vi/8hly31xKli0/maxresdefault.jpg",
            tags:["datastructures","algo"]
        },
        {
            title:"Learn Fluttr",
            description:"Complete Fluttr Course",
            imgSrc:"https://i.ytimg.com/vi/x0uinJvhNxI/maxresdefault.jpg",
            tags:["fluttr"]
        },
        {
            title:"Learn Guitar For Free",
            description:"Complete Guitar Course",
            imgSrc:"https://digitaldefynd.com/wp-content/uploads/2019/04/Best-Guitar-classes-courses-tutorial-certification-training-online.jpg",
            tags:["guitar","music","vocals"]
        },
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
           
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-6 md:space-y-0'>
           {
            courses.map(course=>{
                return <Card key={course.title} course={course}></Card>
            })
           }    
           </div> 
      </div>
    </div>
  )
}

export default Courses
