import React from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import Header from '../components/Header';


function Forms () {
  return (
    <>
    <div className="mb-5">
    <Header />
    </div>
    <div className="d-flex justify-content-center">
      <h3 className="text-light mt-5">Nos Mande Uma Mensagem</h3>
    </div>
   <form className="d-flex flex-column justify-content-center align-items-center mb-5">
    <div className="m-3 mt-5">
      <label className="text-light form-label"> Nome
        <input placeholder="Seu Nome Completo*" className="form-control rounded-4" type='text' />
        </label>
    </div>
    <div className="m-3">
    <label className="text-light form-label"> Email
        <input placeholder="Ex: seunome@gmail.com"  className="form-control rounded-4" type='text' />
        </label>
    </div>
    <div className="m-3">
    <label className="text-light form-label"> Telefone
        <input placeholder="Ex: (99)9.9999-9999"  className="form-control rounded-4" type='tel' />
        </label>
    </div>
    <div className="m-3">
      <textarea placeholder="Deixe-nos uma mensagem*"  className="form-control p-5 rounded-4" />
    </div>
    <div className="m-5">
      <button className="btn  btn-success px-5" type='button'>Enviar</button>
    </div>
   </form>
   <footer className="text-light footer fixed-bottom">
      <Footer />
    </footer>
    </>
  )
}

export default Forms;