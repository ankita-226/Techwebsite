import React from 'react-router-dom';
import {HashLink} from "react-router-hash-link"

function Header() {
  return <nav>
    <h1>TechStar.</h1>
    <main>
       <HashLink to={"/#"}>Home</HashLink>
       <HashLink to={"/#about"}>About</HashLink>
       <HashLink to={"/#brands"}>Brands</HashLink>
       <HashLink to={"/#contact"}>Contact</HashLink>
       <HashLink to={"/#services"}>Services</HashLink>
       
    </main>
  </nav>
}

export default Header