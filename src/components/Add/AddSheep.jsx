import * as React from "react";
import { useFormValidate } from "../../customHooks/useFormValidate.js";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";

function AddSheep() {
  function validate(formData) {
    let errors = {};

    if (!formData.birth_date) {
      errors.birth_date = "Neįvesta gimimo data";
    }

    if (!formData.mother) {
      errors.mother = "Neįvestas motinos numeris";
    } else {
      if (formData.mother.length !== 8) {
        errors.mother = "Numeris turi turėti 8 simbolius";
      }
    }

    if (!formData.father) {
      errors.father = "Neįvestas tėvo numeris";
    } else {
      if (formData.father.length !== 8) {
        errors.father = "Numeris turi turėti 8 simbolius";
      }
    }

    if (!formData.registration_date) {
      errors.registration_date = "Neįvesta registracijos data";
    }

    if (!formData.breed) {
      errors.breed = "Neįvesta veislė";
    }

    if (!formData.gender) {
      errors.gender = "Neįvesta lytis";
    }

    if (!formData.number) {
      errors.number = "Neįvestas avies numeris";
    } else {
      if (formData.number.length !== 8) {
        errors.number = "Numeris turi turėti 8 simbolius";
      }
    }

    return errors;
  }

  const addSheep = (formValues) => {
    fetch("http://localhost:3000/addSheep/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => window.location.assign("/"))
      .catch((err) => {
        console.error(err);
      });
  };

  const { errors, handleChange, handleSubmit } = useFormValidate(
    validate,
    addSheep
  );

  return (
    <div className="App">
      <h2>Pridėti įrašą apie avį</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Lytis</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Avinas (1)"
                name="gender"
                onChange={handleChange}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                name="gender"
                label="Avis (2)"
                onChange={handleChange}
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="Ėriavedė (4)"
                name="gender"
                onChange={handleChange}
              />
            </RadioGroup>
          </FormControl>
          <br />
          {errors && <span className="errorDiv">{errors.gender}</span>}
          <br />

          <Input
            type="text"
            id="number"
            name="number"
            placeholder="Numeris"
            onChange={handleChange}
            required={true}
            pattern="[A-Za-z]{2}\d{4}"
          />
          <br />
          {errors && <span className="errorDiv">{errors.number}</span>}
          <br />

          <InputLabel>Gimimo data:</InputLabel>
          <Input
            type="date"
            id="birth_date"
            name="birth_date"
            placeholder="Gimimo data"
            onChange={handleChange}
            required={true}
          />
          <br />
          {errors && <span className="errorDiv">{errors.birth_date}</span>}
          <br />
          <Input
            type="text"
            id="mother"
            name="mother"
            placeholder="Motina"
            onChange={handleChange}
            required={true}
          />
          <br />
          {errors && <span className="errorDiv">{errors.mother}</span>}
          <br />
          <Input
            type="text"
            id="father"
            name="father"
            placeholder="Tėvas"
            onChange={handleChange}
            required={true}
          />
          <br />
          {errors && <span className="errorDiv">{errors.father}</span>}
          <br />
          <InputLabel>Registracijos data:</InputLabel>
          <Input
            type="date"
            id="registration_date"
            name="registration_date"
            placeholder="Registracijos data"
            onChange={handleChange}
            required={true}
          />
          <br />
          {errors && (
            <span className="errorDiv">{errors.registration_date}</span>
          )}
          <br />
          <Input
            type="text"
            id="breed"
            name="breed"
            placeholder="Veislė"
            onChange={handleChange}
            required={true}
          />
          <br />
          {errors && (
            <span className="errorDiv">{errors.registration_date}</span>
          )}
          <br />

          <ButtonSub text="Pridėti įrašą apie avį" />
        </>
      </Box>
    </div>
  );
}

export default AddSheep;
