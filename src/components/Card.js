import React from 'react'
import {Link} from  'react-router-dom'
function Card(props) {
  return (
    <Link to="/coursedetails">
       <div className='flex flex-row active:bg-slate-100 mt-4 md:h-96 mx-4 bg-white  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 space-x-20 justify-center'>
         <div className="max-w-sm rounded overflow-hidden shadow-lg">
             <img className="w-96 h-44" src={props.course.imgSrc} alt={props.course.title}/>
            <div className="px-6 py-4">
                 <div className="font-bold text-xl mb-2">{props.course.title}</div>
                 <p className="text-gray-700 text-base">
                   {props.course.description}
                 </p>
             </div>
             <div className="px-6 pt-4 pb-2">
                  {
                    props.course.tags.map(ele=>{
                        return  <span key={ele} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{ele}</span>
                    })
                  }
                
             </div>
            </div>
        </div>      
    </Link>
  )
}

export default Card
