import { useFormValidate } from "../../customHooks/useFormValidate.js";
import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

/////////////////////////////////////////////////////////////////////////
function AddMedication() {
  function validate(formData) {
    let errors = {};

    if (!formData.dosage) {
      errors.dosage = "Neįvestas vaisto dozavimas";
    }
    if (!formData.withdrawal) {
      errors.withdrawal = "Neįvesta vaisto išlauka";
    }
    if (!formData.name) {
      errors.name = "Neįvestas vaisto pavadinimas";
    } else {
      if (formData.name.length < 3) {
        errors.name = "Pavadinime turi buti ne mažiau 3 simbolių";
      }
    }

    if (!formData.description) {
      errors.description = "Neįvestas vaisto aprašymas";
    } else {
      if (formData.description.length < 5) {
        errors.description = "Aprašyme turi buti ne mažiau 5 simbolių";
      }
    }

    return errors;
  }

  ///////////

  const addMed = (formValues) => {
    fetch("http://localhost:3000/addMeds/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => window.location.assign("/meds"))

      .catch((err) => {
        console.error(err);
      });
  };

  const { errors, handleChange, handleSubmit } = useFormValidate(
    validate,
    addMed
  );

  return (
    <div className="App">
      <h2>Pridėti vaistus</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Pavadinimas"
          onChange={handleChange}
        />
        <br />
        {errors && <span className="errorDiv">{errors.name}</span>}
        <br />
        <Input
          type="text"
          id="dosage"
          name="dosage"
          placeholder="Dozavimas"
          onChange={handleChange}
        />
        <br />
        {errors && <span className="errorDiv">{errors.dosage}</span>}
        <br />
        <br />
        <Input
          type="text"
          id="withdrawal"
          name="withdrawal"
          placeholder="Išlauka"
          onChange={handleChange}
        />
        <br />
        {errors && <span className="errorDiv">{errors.withdrawal}</span>}
        <br />
        <br />
        <Input
          type="text"
          id="description"
          name="description"
          placeholder="Aprašymas"
          onChange={handleChange}
        />
        <br />
        {errors && <span className="errorDiv">{errors.description}</span>}
        <br />
        <ButtonSub text="Pridėti medikamentą" />
      </Box>
    </div>
  );
}

export default AddMedication;
