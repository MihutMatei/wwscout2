import React from 'react';
import Information from './assets/data.js';

const ShowInfo = () => {
  return (
    <div className="container width-100">
      <h2 className='font-28'>{Information.title}</h2>
      <div className="spacer"></div>
      <h3 className='font-20'> Cerere motivată. </h3>
      <h3 className='font-20'> Dovada împuternicirii legale a angajatorului. </h3>
      <h3 className='font-20'> Certificatul de înmatriculare de la Oficiul Registrului Comerțului. </h3>
      <h3 className='font-20'> Certificat constatator emis de Oficiul Registrului Comerțului din care să rezulte că nu au fost înregistrate mențiuni privind falimentul. </h3>
      <h3 className='font-20'> Certificat de atestare fiscală emis de administrația financiară în a cărei rază teritorială își are sediul social angajatorul;  </h3>
      <h3 className='font-20'> Adeverința eliberată de Agenția pentru ocuparea Forței de Muncă din raza teritorială unde își are sediul social angajatorul cu privire la forța de muncă disponibilă pentru locul de muncă vacant comunicat de angajator.  </h3>
      <h3 className='font-20'> Fișa postului </h3>
      <h3 className='font-20'> Organigrama angajatorului – În organigramă trebuie să apară atât posturile ocupate, cât și posturile vacante cu sublinierea postului vacant pe care dorești să angajezi un cetățean străin.  </h3>
      <h3 className='font-20'> Dovada publicării anunțului de angajare în ziar </h3>
      <h3 className='font-20'> Oferta fermă de angajare; </h3>
      <h3 className='font-20'> Etc.</h3>
      <p>{Information.description}</p>

      <div className="contact-info">
        <h2>Contact Information:</h2>
        <p>Email: {Information.contact.email}</p>
        <p>Phone: {Information.contact.phone}</p>
      </div>
    </div>
  );
};

export default ShowInfo;

// 
// 
// 
// 
// 
// 
// 
// 
// 
// Copia procesului-verbal întocmit în urma selecției realizate pentru ocuparea postului vacant din care trebuie să rezulte că străinul în cauză îndeplinește condițiile de pregătire profesională și experiența în activitate, prevăzute de legislația în materie pentru ocuparea locului de muncă;
// CV cetatean strain – acest document trebuie să conțină și declarația străinului că este apt din punct de vedere medical pentru a putea fi încadrat în muncă și are cunoștințe minime de limba română sau o limbă de circulație internațională.
// Două fotografii ale străinului de tip 3X4.
// Scrisori de recomandare de la foștii angajatori – dacă este cazul.
// Cazier judiciar al străinului (din tara de domiciliu sau de resedinta);
// Cazier judiciar al angajatorului.
// Copia pașaportului cetățeanului străin 