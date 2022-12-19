import React, { useState } from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import Header from '../components/Header';


function Forms () {

  const [formValue, setFormValue] = useState({
    email: "",
    username: "",
    tel: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

 const { email, username, tel, message } = formValue;

  return (
    <>
    <div className="mb-5">
    <Header />
    </div>
    <div className="d-flex justify-content-center">
      <h3 className="text-light mt-5">Nos Mande Uma Mensagem</h3>
    </div>
   <form className="d-flex flex-column justify-content-center align-items-center mb-5" action="https://formsubmit.co/comercialhebertontorres@gmail.com" method="POST">
    <div className="m-3 mt-5">
      <label className="text-light form-label"> Nome
        <input placeholder="Seu Nome Completo*" name="username" value={ username } onChange={ handleChange } className="form-control rounded-4" type='text'/>
        </label>
    </div>
    <div className="m-3">
    <label className="text-light form-label"> Email
        <input placeholder="Ex: seunome@gmail.com" name="email" value={ email } onChange={ handleChange }  className="form-control rounded-4" type='text' required />
        </label>
    </div>
    <div className="m-3">
    <label className="text-light form-label"> Telefone
        <input placeholder="Ex: (99)9.9999-9999" name="tel" value={ tel } onChange={ handleChange }  className="form-control rounded-4" type='tel' required />
        </label>
    </div>
    <div className="m-3">
      <textarea placeholder="Deixe-nos uma mensagem*" name="message" value={ message } onChange={ handleChange }  className="form-control p-5 rounded-4" required />
    </div>
    <div className="m-5">
      <button className="btn  btn-success px-5" type='submit'>Enviar</button>
    </div>
   </form>
   <footer className="text-light footer fixed-bottom">
      <Footer />
    </footer>
    </>
  )
}

export default Forms;