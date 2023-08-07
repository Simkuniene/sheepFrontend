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
import InputLabel from "@mui/material/InputLabel";

function UpdateSheep() {
  const localStorageData = JSON.parse(localStorage.getItem("sheepData"));
  const [sheepData, setMyData] = useState({
    localStorageData,
  });

  const params = useParams();

  //let oldSheepData = {};

  const inputChange = (event) => {
    const { name, value } = event.target;

    setMyData((oldSheepData) => ({
      ...oldSheepData,
      [name]: value,
    }));
  };

  const updateSheep = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/sheepupdate/" + params.number, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheepData),
    })
      .then((res) => res.json())
      .then((data) =>
        window.location.assign("/sheep/" + localStorageData.number)
      )

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
        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Lytis: </FormLabel>
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
          <br />

          <InputLabel sx={{ display: "inline" }}>Gimimo data: </InputLabel>
          <Input
            type="date"
            id="birth_date"
            name="birth_date"
            placeholder="Gimimo data:"
            defaultValue={localStorageData.birth_date}
            onChange={inputChange}
            required={true}
          />
          <br />
          <br />
          <InputLabel sx={{ display: "inline" }}>Motina: </InputLabel>
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
          <br />

          <InputLabel sx={{ display: "inline" }}>Tėvas: </InputLabel>
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
          <br />
          <InputLabel sx={{ display: "inline" }}>
            Registracijos data:{" "}
          </InputLabel>
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
          <br />
          <InputLabel sx={{ display: "inline" }}>Veislė: </InputLabel>
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

          <ButtonSub text="Atnaujinti įrašą apie avį" />
        </div>
      </Box>
    </div>
  );
}

export default UpdateSheep;
