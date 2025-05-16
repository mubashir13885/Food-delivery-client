import React from 'react'
import { Outlet } from "react-router-dom";
import Heropage from '../../components/user/Heropage';
import Productpage from './Productpage';
import Restaurant from './Restaurant';

function HomePage() {
   

  return (
   <div >
     <Heropage/>

     <Restaurant/>
     <Productpage/>

    <Outlet />
    </div>
   
    
  
  )
}

export default HomePage