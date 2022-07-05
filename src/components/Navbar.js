import React from 'react'
import {Link,useLocation} from 'react-router-dom'

function Navbar() {

    let location = useLocation();
    let auth = location.pathname;
    let authStatus = false;
    if(auth==='/' || auth==='/login' || auth==='/signup' || auth==='/about' || auth==='/faq'){
      authStatus=false;
    }else{
      authStatus=true;
    }
    
    const toggleMenu = async ()=>{
        if(document.getElementById("smNav").classList.contains('h-0')){
            document.getElementById("smNav").classList.remove('h-0')
            document.getElementById("smNav").classList.add("h-full");
            
        }
        else{
            document.getElementById("smNav").classList.remove('h-full')
            document.getElementById("smNav").classList.add("h-0");
        }
        
    }  

    const toggleLogoutBtn = () =>{
      document.getElementById('logoutBtn').classList.toggle('hidden')
    }


  return (
    <div>
       <nav className='w-full z-20 bg-blue-50 fixed top-0 flex flex-row justify-between md:justify-around h-16 p-4 items-center'>

        <h1 className="font-bold text-xl md:text-3xl cursor-pointer bg-gradient-to-tr from-pink-600 to-pink-500 p-2 text-transparent bg-clip-text">
           <i className="fa fa-book" aria-hidden="true"></i>  Living Books
        </h1>
          
          <ul className='hidden md:flex flex-row space-x-6 lg:space-x-9 items-center text-md lg:text-lg'>
            <Link to="/"><li className='cursor-pointer hover:text-pink-400'>Home</li></Link>
            <Link to="/dashboard"><li className='cursor-pointer hover:text-pink-400'>Dashboard</li></Link>
            <Link to="/about"><li className='cursor-pointer hover:text-pink-400'>About Us</li></Link>
            <Link to="/faq"><li className='cursor-pointer hover:text-pink-400'>FAQ</li></Link>

            <li>
               |
            </li>
            {
              (!authStatus) &&
                <Link to="/login"><li className='cursor-pointer hover:text-pink-700 hover:underline'>Login</li></Link> 
            }
             {
              (!authStatus) &&
                <Link to="/signup"><li className='cursor-pointer'> <button className='border-2 px-4 py-1 border-pink-500 hover:text-white hover:bg-pink-500 hover:border-red-300 transition-all ease-in-out duration-1000 rounded-md'> Join Now </button> </li></Link>
             }

             {
              (authStatus) &&
              <div>
                <div className='cursor-pointer py-1 px-2 rounded-full bg-slate-300 hover:bg-slate-200' onClick={toggleLogoutBtn}><i className="fa fa-user-circle" aria-hidden="true"></i> Santosh  <i className="fa fa-angle-down" aria-hidden="true"></i> </div>
                <Link to={'/'} id='logoutBtn' className='bg-slate-200  overflow-hidden rounded-full hover:bg-slate-300 absolute transition-all duration-1000 ease-in-out top-14 px-2 py-1 hidden'>Logout</Link>
              </div>
             }
            
          </ul>

        <div className='md:hidden  cursor-pointer bg-gradient-to-tr from-pink-600 to-pink-500 text-transparent bg-clip-text hover:text-pink-400 transition-all ease-in-out duration-500'>
            <i className="fas fa-bars fa-lg md:fa-xl" onClick={toggleMenu}></i>
        </div>
       </nav>

       <nav id="smNav" className="w-[100%] h-0 overflow-hidden fixed bg-[rgb(0,0,0,0.8)]  top-14 text-white transition-all duration-1000 ease-in-out">
            <ul className="flex flex-col space-y-3 items-center p-14 text-lg">
                <Link to="/"><li className='cursor-pointer hover:text-pink-400 smNavEle' onClick={toggleMenu}>Home</li></Link>
                <Link to="/dashboard"><li className='cursor-pointer hover:text-pink-400 smNavEle' onClick={toggleMenu}>Dashboard</li></Link>
                <Link to="/about"><li className='cursor-pointer hover:text-pink-400 smNavEle' onClick={toggleMenu}>About Us</li></Link>
                <Link to="/faq"><li className='cursor-pointer hover:text-pink-400 smNavEle' onClick={toggleMenu}>FAQ</li></Link>

                <li>
                |
                </li>
                {
                  (!authStatus) &&
                  <Link to="/login"> <li className='cursor-pointer hover:text-pink-700 hover:underline smNavEle' onClick={toggleMenu}>Login</li></Link>
                }
                {
                  (!authStatus) &&
                   <Link to="/signup"><li className='cursor-pointer smNavEle' onClick={toggleMenu}> <button className='border-2 px-4 py-1 border-pink-500 hover:text-white hover:bg-pink-500 hover:border-red-300 transition-all ease-in-out duration-1000 rounded-md'> Join Now </button> </li></Link>
                }

                {
                  (authStatus) &&
                  <div>
                    <Link to={'/'}  className='py-1 px-2' onClick={toggleMenu}>Logout</Link>
                  </div>
                }


                <li className="hover:text-blue-200 duration-500 h-full p-5 text-red-600 cursor-pointer" onClick={toggleMenu}> &#10060; </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
