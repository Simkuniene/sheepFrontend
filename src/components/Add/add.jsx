import Button from "../Button/Button.jsx";
import "./add.css";
import { useState } from "react";
//import { useEffect, useState } from "react";

function Add() {

    const [ordertData, setMyData] = useState({
        people:"",
        price:""});


//const order = {};

const inputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    //... pridedu visus buvusius ordertData elementus ir ...
    setMyData((oldOrdertData) => ({
      ...oldOrdertData,
      [name]: value
    }));
  }; 

  const addOrder = (event) => {
    event.preventDefault();
    console.log(ordertData);

    fetch("https://believed-shore-vanadium.glitch.me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ordertData),
      })
        .then((res) => res.json())
        .then((data) => alert("Uzsakymas pridetas"))
                
        .catch((err) => {
          console.error(err);
        });
   

   
  };



return (
    <div className="App">
      <div className="main">

     
      <form onSubmit={addOrder}>
       <input type="number" id="people" name="people" step={1} placeholder="People" value={ordertData.people} onChange={inputChange} required/><br/>
       <input type="number" id="price" name="price" step={0.01} placeholder="Price" value={ordertData.price} onChange={inputChange} required/><br/>
       <Button />
       
       </form>

      
      </div>
    </div>
  );
}


export default Add