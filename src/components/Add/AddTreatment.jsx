import { useFormValidate } from "../../customHooks/useFormValidate.js";
import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

/////////////////////////////////////////////////////////////////////////
function AddTreatment() {
  const localStorageData = JSON.parse(localStorage.getItem("sheepData"));

  function validate(formData) {
    let errors = {};

    if (!formData.start) {
      errors.start = "Neįvestas pradžia gydymo";
    }
    if (!formData.finish) {
      errors.finish = "Neįvestas pabaiga gydymo";
    }
    if (!formData.dosage) {
      errors.dosage = "Neįvestas vaisto dozavimas";
    }
    if (!formData.withdrawal) {
      errors.withdrawal = "Neįvesta vaisto išlauka";
    }
    if (!formData.medicine) {
      errors.medicine = "Neįvestas vaisto pavadinimas";
    } else {
      if (formData.medicine.length < 3) {
        errors.medicine = "Pavadinime turi buti ne mažiau 3 simbolių";
      }
    }

    return errors;
  }

  ///////////

  const addMed = (formValues) => {
    formValues.number = localStorageData.number;
    fetch("http://localhost:3000/addTreatment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) =>
        window.location.assign("/sheep/" + localStorageData.number)
      )
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
      <h2>{localStorageData.number}</h2>
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
          id="medicine"
          name="medicine"
          placeholder="Vaistas"
          onChange={handleChange}
        />
        <br />
        {errors && <span className="errorDiv">{errors.medicine}</span>}
        <br />
        <InputLabel>Pradėta varoti vaistus:</InputLabel>
        <Input
          type="date"
          id="start"
          name="start"
          placeholder="Pradėta"
          onChange={handleChange}
        />
        <br />
        {errors && <span className="errorDiv">{errors.start}</span>}
        <br />
        <InputLabel>Baigta varoti vaistus:</InputLabel>
        <Input
          type="date"
          id="finish"
          name="finish"
          placeholder="Baigta"
          onChange={handleChange}
        />

        <br />
        {errors && <span className="errorDiv">{errors.finish}</span>}
        <br />

        <Input
          type="text"
          id="dosage"
          name="dosage"
          placeholder="Dozė"
          onChange={handleChange}
        />
        <br />
        {errors && <span className="errorDiv">{errors.dosage}</span>}
        <br />
        <InputLabel>Išlauka:</InputLabel>
        <Input
          type="date"
          id="withdrawal"
          name="withdrawal"
          placeholder="Išlauka"
          onChange={handleChange}
        />
        <br />
        {errors && <span className="errorDiv">{errors.withdrawal}</span>}
        <br />

        <ButtonSub text="Pridėti" />
      </Box>
    </div>
  );
}

export default AddTreatment;
