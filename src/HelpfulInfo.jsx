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
    </div>
  );
};
};

export default ShowInfo;


  

