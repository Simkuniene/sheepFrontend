import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function AddSheep() {
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

    fetch("http://localhost:3000/addSheep/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheepData),
    })
      .then((res) => res.json())
      .then((data) => alert("Avis prideta"))

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
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
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Lytis</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="1"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Avinas (1)"
                name="gender"
                onChange={inputChange}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                name="gender"
                label="Avis (2)"
                onChange={inputChange}
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="Ėriavedė (4)"
                name="gender"
                onChange={inputChange}
              />
            </RadioGroup>
          
          <br />

         

                 {/* <Input type="radio" id="gender1" name="gender" value="1" onChange={inputChange} label="Avinas (1)" required/><br/>
       <Input type="radio" id="gender2" name="gender" value="2" onChange={inputChange} label="Avis (2)" required/><br/>
       <Input type="radio" id="gender4" name="gender" value="4" onChange={inputChange} label="Ėriavedė (4)" required/><br/> */}
          {/* <Input type="number" id="gender" name="gender"  onChange={inputChange} required/><br/> */}
          
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
            id="birth_date"
            name="birth_date"
            placeholder="Gimimo data"
            onChange={inputChange}
            required={true}
          />
          <br />
          <Input
            type="text"
            id="mother"
            name="mother"
            placeholder="Motina"
            onChange={inputChange}
            required={true}
          />
          <br />
          <Input
            type="text"
            id="father"
            name="father"
            placeholder="Tėvas"
            onChange={inputChange}
            required={true}
          />
          <br />
          <Input
            type="date"
            id="registration_date"
            name="registration_date"
            placeholder="Registracijos data"
            onChange={inputChange}
            required={true}
          />
          <br />
          <Input
            type="text"
            id="breed"
            name="breed"
            placeholder="Veislė"
            onChange={inputChange}
            required={true}
          />
          <br />
          <br />
          </FormControl>
          <ButtonSub text="Pridėti įrašą apie avį" />

          {/* </form> */}
        </>
      </Box>
    </div>
  );
}

export default AddSheep;
