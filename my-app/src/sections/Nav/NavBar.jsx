import React, { useState } from 'react'
import "./NavBar.css"
import {BsFillBagFill} from "react-icons/bs"
export const NavBar = () => {

const [reg,setReg] = useState(true)

  const regstred = 
<div className='d-flex'>
<div className="dropdown text-end col" >
  <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle " />
  </a>
  <ul className="dropdown-menu text-small">
    <li><a className="dropdown-item" href="#">New project...</a></li>
    <li><a className="dropdown-item" href="#">Settings</a></li>
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Sign out</a></li>
  </ul>
</div>
</div>

  const gust = 
  <div className="nav d-flex text-end col custom" >
  <a href="/" className="nav-link d-block text-decoration-none  mx-1" >
      Log In
    </a>
  <a href="/" className="nav-link d-block text-decoration-none mx-1" >
      Sign Up
    </a>
  </div>

  return (
<nav className="d-flex flex-wrap align-items-center justify-content-around px-5 pt-3 w-100">
        <a href="/" className="navbar-brand custom text-capitalize me-5">
        book<span className="">Store</span>
        </a>

        <ul className="nav custom col-12 col-lg-auto  mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 ">Home</a></li>
          <li><a href="#" className="nav-link px-2 ">Books</a></li>
          <li><a href="#" className="nav-link px-2 ">Magazines</a></li>
          <li><a href="#" className="nav-link px-2 ">TextBooks</a></li>
          <li><a href="#" className="nav-link px-2 ">Blog</a></li>
        </ul>

<div className='d-flex col-2'>
        <div className="cart text-end  mx-4">
          <a href="/" className="d-block text-decoration-none icon" data-bs-toggle="dropdown" aria-expanded="false">
            <BsFillBagFill />
          </a>
          <ul className="dropdown-menu text-small">
            <li>New project...</li>
          </ul>
        </div>
    {reg?regstred:gust}
    </div>
      </nav>
  )
}
