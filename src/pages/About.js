import React from 'react'
import { useEffect } from "react";

function About(props) {
  useEffect(()=>{
    props.showLoader()
  },[]);
  return (
    <div>
        <div  className='flex flex-col bg-purple-600 text-white items-center mt-16'>
          <div className='container  justify-center my-24 md:w-[75%] flex flex-col-reverse items-center md:flex-row md:space-x-6'>
          
              <div className='md:w-[60%] p-4 text-center md:text-left'>
                  
                  <h1 className='font-bold my-4 text-3xl  md:text-4xl lg:text-6xl text-yellow-400'>About Us</h1>

                  <h2 className='my-4'> Living Books’s mission is to create new possibilities for people and organizations everywhere by connecting them to the knowledge and skills they need to succeed in a changing world.
                    Fueled by the Living Books marketplace, Living Books Business helps companies achieve critical business outcomes and stay competitive by offering fresh, relevant, and personalized on-demand learning. The Living Books Business subscription is a curation of top-rated courses taught by real-world experts from the Living Books marketplace. Our content covers key business and technical topics ranging from development and IT to leadership, marketing, design, stress management, and much more. In addition to a curated content collection, we offer a platform to drive effective learning as well as tools for leaders to host and distribute their own proprietary content. </h2>
                  
              </div>
              <div className='w-[30%] md:w-[40%]'> 
                  <img src='pictures/bulb.png'/>
                </div>
          </div>

        </div>
    </div>
  )
}

export default About
