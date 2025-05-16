import React from 'react'
import Header from '../components/user/Header'
import { Outlet } from "react-router-dom";
import Cartpage from '../pages/user/Cartpage';
import Heropage from '../components/user/Heropage';
import Footer from '../components/user/Footer';

function UserLayout() {
  return (

    
    <div className='min-h-screen bg-white text-black  flex flex-col'>
        <Header />
       
        <div className='flex-1 bg-cover justify-center items-center h-screen bg-white-100'>
        <Outlet/>
         </div>
        
    <div>
     <Footer/>
    </div>
        </div>

 
  )
}

export default UserLayout