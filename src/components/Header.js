import React from "react";
import imgHeader from '../images/image-header.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header () {
  return (
    <div className="block p-1 bg-black">
      <img className="w-25" src={ imgHeader } alt='logo' />
    </div>
  )
}

export default Header;