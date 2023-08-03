import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import { useState } from "react";
//import { useEffect, useState } from "react";

function AddMedication() {

    const [medData, setMyData] = useState({
        name: "",
        description: ""
       });


let oldMedData = {};

const inputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    //... pridedu visus buvusius ordertData elementus ir ...
   
    setMyData((oldMedData) => ({
      ...oldMedData,
      [name]: value
    }));
    console.log(name, value);
    console.log(oldMedData);
    console.log(medData);
  }; 

  const addMed = (event) => {
    event.preventDefault();
    console.log(medData);

    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/meds/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medData),
      })
        .then((res) => res.json())
        .then((data) => alert("Vaistas pridetas"))
                
        .catch((err) => {
          console.error(err);
        });
   

   
  };



return (
    <div className="App">
      <div className="main">

     
      
      <form onSubmit={addMed}>
       <input type="text" id="name" name="name" placeholder="Name" value={medData.name} onChange={inputChange} required/><br/>
       <input type="text" id="description" name="description" placeholder="Description" value={medData.description} onChange={inputChange} required/><br/>
      
       <ButtonSub />
       
       </form>

      
      </div>
    </div>
  );
}


export default AddMedication