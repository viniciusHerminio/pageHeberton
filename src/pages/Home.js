import React from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../images/image-profile.jpg';
import { FaArrowDown, FaRocket, FaBrain, FaFire, FaYoutube } from 'react-icons/fa'
import Footer from "../components/Footer";
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


function Home () {
  const navigate = useNavigate();
  return (
    <>
    <Header />
    <div className="d-flex flex-column justify-content-center align-items-center p-2">
      
    <div className="m-5">
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
        <button
          className="m-4 ps-5 pe-5 btn btn-primary btn-sm rounded-pill"
          type="button"
          onClick={ () => navigate('/forms') }
        >
          <FaRocket/> CONTRATAR SERVIÇO DE TRÁFEGO</button>
        </div>
        <button className="m-4 btn btn-primary btn-sm rounded-pill " type="button"><FaBrain /> APRENDER TRÁFEGO PAGO</button>
        <button className="m-4 btn btn-primary btn-sm rounded-pill " type="button"><FaFire /> CONSULTORIA HEBERTON TORRES</button>
        <button className="m-4 btn btn-primary btn-sm rounded-pill " type="button"><FaYoutube /> CANAL NO YOUTUBE</button>
      </div>
    </div>
    <footer className="text-light footer">
      <Footer />
    </footer>
    </>
  )
}

export default Home;