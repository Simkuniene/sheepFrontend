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
import { useParams } from "react-router-dom";

function UpdateSheep() {
 // const storedData = localStorage.getItem('userData');
  const localStorageData = JSON.parse(localStorage.getItem('sheepData'));
  console.log('localStorageData');
  console.log(localStorageData);

  // const [sheepData, setMyData] = useState({
  //   number: "AA0",
  //   gender: "",
  //   birth_date: 0,
  //   mother: "",
  //   father: "",
  //   registration_date: 0,
  //   breed: "",
  // });

  const [sheepData, setMyData] = useState({
    localStorageData
  });

  const params = useParams();
  
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

  const updateSheep = (event) => {
    event.preventDefault();
    console.log(sheepData);

    fetch("http://localhost:3000/sheepupdate/" + params.number, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheepData),
    })
      .then((res) => res.json())
      .then((data) => alert("Duomenys atnaujinti"))

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
        <h2>{localStorageData.number}</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={updateSheep}
      >
        <>
          {/* <form onSubmit={addSheep}>   */}
          {/* <Input
            type="text"
            id="number"
            name="number"
          defaultValue={localStorageData.number}
           //value={params.number}
            placeholder="Numeris"
            onChange={inputChange}
            required={true}
            disabled={true}
          /> */}
          <br />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Lytis</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
             defaultValue={localStorageData.gender}
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
            </FormControl>
          <br />

          
          <Input
            type="date"
            id="birth_date"
            name="birth_date"
            placeholder="Gimimo data"
            defaultValue={localStorageData.birth_date}
            onChange={inputChange}
            required={true}
          />
          <br />
          <Input
            type="text"
            id="mother"
            name="mother"
            placeholder="Motina"
            defaultValue={localStorageData.mother}
            onChange={inputChange}
            required={true}
          />
          <br />
          {/* <input type="text"
            id="father"
            name="father"
           // defaultValue="AA46894"
            value="AB46894"
            placeholder="Tėvas"
            onChange={inputChange} /> */}

          <Input
            type="text"
            id="father"
            name="father"
         //   defaultValue="AB46894"
            placeholder="Tėvas"
            defaultValue={localStorageData.father}
            onChange={inputChange}
            required={true}
          />
          <br />
          <Input
            type="date"
            id="registration_date"
            name="registration_date"
            placeholder="Registracijos data"
            defaultValue={localStorageData.registration_date}
            onChange={inputChange}
            required={true}
          />
          <br />
          <Input
            type="text"
            id="breed"
            name="breed"
            placeholder="Veislė"
            defaultValue={localStorageData.breed}
            onChange={inputChange}
            required={true}
          />
          <br />
          <br />
         
          <ButtonSub text="Pridėti įrašą apie avį" />

          {/* </form> */}
        </>
      </Box>
    </div>
  );
}

export default UpdateSheep;
