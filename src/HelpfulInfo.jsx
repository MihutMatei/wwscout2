import { useState }  from "react";
import React from 'react';
import Information from './assets/data.js'; // Import your data
import { App } from "antd";
import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Layout from './components/Layout'
// import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'
//import './App.scss'

export function ShowInfo() {
const ShowInfo = () => {
  return (
    <div className="container">
      <h1>{Information.title}</h1>
      <p>{Information.description}</p>
      <div className="contact-info">
        <h2>Contact Information:</h2>
        <p>Email: {Information.contact.email}</p>
        <p>Phone: {Information.contact.phone}</p>
      </div>
      <p>1. Documentele necesare pentru avizul de muncă pentru angajare cetateni Non-UE

Cerere motivată.
Dovada împuternicirii legale a angajatorului.
Certificatul de înmatriculare de la Oficiul Registrului Comerțului.
Certificat constatator emis de Oficiul Registrului Comerțului din care să rezulte că nu au fost înregistrate mențiuni privind falimentul.
Certificat de atestare fiscală emis de administrația financiară în a cărei rază teritorială își are sediul social angajatorul; 
Adeverința eliberată de Agenția pentru ocuparea Forței de Muncă din raza teritorială unde își are sediul social angajatorul cu privire la forța de muncă disponibilă pentru locul de muncă vacant comunicat de angajator. 
Fișa postului
Organigrama angajatorului – În organigramă trebuie să apară atât posturile ocupate, cât și posturile vacante cu sublinierea postului vacant pe care dorești să angajezi un cetățean străin. 
Dovada publicării anunțului de angajare în ziar
Oferta fermă de angajare;
Copia procesului-verbal întocmit în urma selecției realizate pentru ocuparea postului vacant din care trebuie să rezulte că străinul în cauză îndeplinește condițiile de pregătire profesională și experiența în activitate, prevăzute de legislația în materie pentru ocuparea locului de muncă;
CV cetatean strain – acest document trebuie să conțină și declarația străinului că este apt din punct de vedere medical pentru a putea fi încadrat în muncă și are cunoștințe minime de limba română sau o limbă de circulație internațională.
Două fotografii ale străinului de tip 3X4.
Scrisori de recomandare de la foștii angajatori – dacă este cazul.
Cazier judiciar al străinului (din tara de domiciliu sau de resedinta);
Cazier judiciar al angajatorului.
Copia pașaportului cetățeanului străin </p>
    </div>
  );
};
};

export default ShowInfo;


  

