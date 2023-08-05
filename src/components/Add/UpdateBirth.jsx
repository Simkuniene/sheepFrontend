import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import { useState } from "react";


function UpdateBirth() {
  const [sheepData, setMyData] = useState({
    number: "",
    gender: 0,
    birth_date: 0,
    mother: "",
    father: "",
    registration_date: 0,
    breed: "",
  });

  //const order = {};
  let oldSheepData = {};

  const inputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    //... pridedu visus buvusius ordertData elementus ir ...

    setMyData((oldSheepData) => ({
      ...oldSheepData,
      [name]: value,
    }));
    console.log(name, value);
    console.log(oldSheepData);
    console.log(sheepData);
  };

  const addSheep = (event) => {
    event.preventDefault();
    console.log(sheepData);

    fetch("http://localhost:3000/updateBirth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheepData),
    })
      .then((res) => res.json())
      .then((data) => alert("Gimdymas redaguotas"))

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <h2>Pridėti gimdymą</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={addSheep}
      >
        <>
          {/* <form onSubmit={addSheep}>   */}
          
          <br />
          
          <Input
            type="text"
            id="number"
            name="number"
            placeholder="Numeris"
            onChange={inputChange}
            required={true}
          />
          <br />
          
          <Input
            type="date"
            id="date"
            name="date"
            placeholder="Gimdymo data"
            onChange={inputChange}
            required={true}
          />
          <br />
          <Input
            type="text"
            id="lambs_number"
            name="lambs_number"
            placeholder="Ėriukų skaičius"
            onChange={inputChange}
            required={true}
          />
          <br />
          <Input
            type="text"
            id="notes"
            name="notes"
            placeholder="Pastabos"
            onChange={inputChange}
            required={true}
          />
          <br />
          
          <br />
         
          <ButtonSub text="Pridėti įrašą apie gimdymą" />

          {/* </form> */}
        </>
      </Box>
      
    </div>
  );
}

export default UpdateBirth;
