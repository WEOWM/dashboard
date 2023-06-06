import React from 'react'
import "./Default.css"
import NavBar from '../../Component/Navbar/NavBar'
import { Outlet } from 'react-router'

const Default = () => {
  return (
<>
  <div className="box">
    <div className="sidebar" >
      <NavBar />
    </div>
    <div className="content m-0">
      <Outlet/>
        {/* {auth ? <Outlet /> : <Navigate to={"/login"} />} */}
    </div>
  </div>
</>
  )
}

export default Default