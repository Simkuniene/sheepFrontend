import { useFormValidate } from "../../customHooks/useFormValidate.js";
import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from '@mui/material/InputLabel';


/////////////////////////////////////////////////////////////////////////
function AddBirth() {
  const localStorageData = JSON.parse(localStorage.getItem("sheepData"));
  console.log("localStorageData");
  console.log(localStorageData);

  function validate(formData) {
    let errors = {};

    console.log("formData from vaditade");
    console.log(formData);

    if (!formData.date) {
      errors.date = "Neįvesta gimdymo data";
    }
    if (!formData.lambs_number) {
      errors.lambs_number = "Neįvestas ėriukų skaičius";
    }
    
    return errors;
  }

  ///////////

  const addMed = (formValues) => {
    //console.log(name, value);

    console.log(" formValues from addMed");
    console.log(formValues);
    formValues.number = localStorageData.number;
    console.log(" formValues with number");
    console.log(formValues);

    // console.log(errors.name + " name");//undefined
    // console.log(errors.description + " description");

    fetch("http://localhost:3000/addBirth/", {
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

  //const { formValues, errors, handleChange, handleSubmit } = useFormValidate(
  const { errors, handleChange, handleSubmit } = useFormValidate(
    //{ name: "", description: "" },
    validate,
    addMed
    // formErrors
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
        <>
        <InputLabel>Gimdymo data</InputLabel>
          <Input
            type="date"
            id="date"
            name="date"
            placeholder="Gimdymo data"
            onChange={handleChange}
          />
          <br />
          {errors && <span className="errorDiv">{errors.date}</span>}
          <br />
          <Input
            type="text"
            id="lambs_number"
            name="lambs_number"
            placeholder="Ėriukų skaičius"
            onChange={handleChange}
          />
          <br />
          {errors && <span className="errorDiv">{errors.lambs_number}</span>}
          <br />
          <Input
            type="text"
            id="notes"
            name="notes"
            placeholder="Pastabos"
            onChange={handleChange}
          />
          <br />
          <br />
          <ButtonSub text="Pridėti įrašą apie gimdymą" />
        </>
      </Box>
    </div>
  );
}

export default AddBirth;
