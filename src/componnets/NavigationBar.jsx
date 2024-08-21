import React from 'react'
import home from '../assets/Home.svg'
const NavigationBar = () => {
  return (
    <>
    <nav className="navbar flex-col fixed-top navbar-expand-lg bg-transaparent mx-auto text-white">
    <div className="container-fluid ">
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <img src={home} alt="" />
    </button>
      
      <div className="collapse navbar-collapse flex-row-reverse " id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown ms-4">
               <a className="nav-link dropdown-toggle text-capitalize text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               PLACEHOLDER TITLE
               </a>
            </li>
            <li className="nav-item dropdown ms-4">
               <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               PLACEHOLDER TITLE
               </a>
            </li>
            <li className="nav-item dropdown ms-4">
               <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               PLACEHOLDER TITLE
               </a>
            </li>
            <button type="button" class="btn btn-outline-secondary text-white text-uppercase ms-5">Sign in</button>
         </ul>
      </div>
    </div>

    <div className="w-100 line" ><hr  /></div>
      
    <div className="container-fluid ">
      <div className="collapse navbar-collapse flex-row-reverse sub-nav" id="navbarSupportedContent">
         <ul className="navbar-nav d-flex ">
            <li className="nav-item ms-4 fs-6">Placeholder Title</li>
            <li className="nav-item ms-4 fs-6">Placeholder Title</li>
            <li className="nav-item ms-4 fs-6">Placeholder Title</li>
            <li className="nav-item ms-4 fs-6">Placeholder Title</li>
         </ul>
      </div>
    </div>
    
  </nav>

{/* <!-- Sub Navbar --> */}
  
    </>
  )
}

export default NavigationBar