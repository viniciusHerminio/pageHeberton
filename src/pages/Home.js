import React from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../images/image-profile.jpg';
import { FaArrowDown, FaRocket, FaBrain, FaFire, FaYoutube } from 'react-icons/fa'
import Footer from "../components/Footer";


function Home () {
  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center p-2">
      
    <div className="m-3">
        <img className="img-thumbnail rounded-circle" src={profile} alt="Photography of Profile " />
        </div>
        <div className="m-3">
      <h1 className="text-light">Herberton Torres</h1>
      </div>
      <div className="text-light">
        <h5><FaArrowDown /> Links Importantes</h5>
      </div>
      <div className="d-flex flex-column m-5">
        <div>
        <button className="m-3 ps-5 pe-5 btn btn-primary btn-lg rounded-pill " type="button"><FaRocket/> CONTRATAR SERVIÇO DE TRÁFEGO</button>
        </div>
        <button className="m-3 btn btn-primary btn-lg rounded-pill " type="button"><FaBrain /> APRENDER TRÁFEGO PAGO</button>
        <button className="m-3 btn btn-primary btn-lg rounded-pill " type="button"><FaFire /> CONSULTORIA HEBERTON TORRES</button>
        <button className="m-3 btn btn-primary btn-lg rounded-pill " type="button"><FaYoutube /> CANAL NO YOUTUBE</button>
      </div>
    </div>
    <footer className="text-light footer fixed-bottom">
      <Footer />
    </footer>
    </>
  )
}

export default Home;