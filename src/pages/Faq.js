import React from 'react'
import { useEffect } from "react";

function Faq(props) {
  useEffect(()=>{
    props.showLoader()
  },[]);
  return (
    <div className='flex justify-center mt-24'>
       <div className='container'>
          <h1 className='font-serif font-bold text-center md:text-2xl'>Learning With Living Books : FAQ</h1>
          <hr className='my-5'/>
          <div className='flex flex-col items-center'>
            <div className='md:w-2/3 my-5 p-3'>
              <div className='font-bold text-2xl text-slate-600'>What do Living Books courses include?</div>
              <div>Each Living Books course is created, owned and managed by the instructor(s). The foundation of each Living Books course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. </div>
            </div>
            <div className='md:w-2/3 my-5 p-3'>
              <div className='font-bold text-2xl text-slate-600'>How do I take a Living Books course?</div>
              <div>Living Books courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app. 
              After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your Living Books account). You can also begin the course by logging in and navigating to your My learning page.  </div>
            </div>
            <div className='md:w-2/3 my-5 p-3'>
              <div className='font-bold text-2xl text-slate-600'>Do I have to start my Living Books course at a certain time? And how long do I have to complete it?</div>
              <div>There are no deadlines to begin or complete a course. Learn more about our Lifetime Access policy.</div>
            </div>
            <div className='md:w-2/3 my-5 p-3'>
              <div className='font-bold text-2xl text-slate-600'>Is Living Books an accredited institution? Do I receive anything after I complete a course?</div>
              <div>While Living Books is not an accredited institution, we offer skills-based courses taught by real-world experts in their field. Every approved, paid course features a certificate of completion to document your accomplishment.  </div>
            </div>
            <div className='md:w-2/3 my-5 p-3'>
              <div className='font-bold text-2xl text-slate-600'>Is there any way to preview a course?</div>
              <div>Yes! Learn how to preview a course, and review key information about it. This article outlines how you can search Living Books’s ever-growing library, and find courses you’re interested in taking.</div>
            </div>
            <div className='md:w-2/3 my-5 p-3'>
              <div className='font-bold text-2xl text-slate-600'>Where can I go for help?</div>
              <div>If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. 
                Our Help Center has extensive information regarding Living Books’s various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help. </div>
            </div>

            <div className='md:w-2/3 my-10 p-3'>
              <div className='font-bold text-xl'>Was this article helpful?</div>
              <div> <i class="fa fa-thumbs-up cursor-pointer hover:scale-125" aria-hidden="true"></i> &nbsp; &nbsp; <i class="fa fa-thumbs-down cursor-pointer hover:scale-125" aria-hidden="true"></i> </div>
            </div>

          </div>
       </div>
    </div>
  )
}

export default Faq
