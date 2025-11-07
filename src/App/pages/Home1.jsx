import React from "react";
import "./home.css";
// import carImg from "../images/car.png";

export default function Home() {
  return (
    <div className="full-screen-container ">
      <img src='https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhciUyMHJlbnRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' alt="car" className="background-image" />
      <div className="overlay-text" style={{ fontFamily: "Agrabah, cursive", }}>
        <h1 style={{ fontSize: '60px',fontWeight:'bold' }}>Welcome to BillaCar</h1>
        <p style={{ fontSize: '25px', marginBottom: '50px' }}>Find and share rides easily</p>
      </div>
      
    </div>
  );
}
