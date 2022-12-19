import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCopyright } from 'react-icons/fa'

function Footer () {
  return (
    <div  className="d-flex justify-content-center bg-black align-items-baseline">
      <div className="m-3 p-2">
        <FaCopyright />
      </div>
    <div>
      <p>Gestor de Performance - Todos os direitos reservados</p>
      </div>
    </div>
  )
}

export default Footer;