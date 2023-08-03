import { useFormValidate } from "../../customHooks/useFormValidate.js";
import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
//import { useState, useReducer } from "react";
//import { useEffect, useState } from "react";

/////////////////////////////////////////////////////////////////////////
function AddMedication() {
  // const { state, isValid } = useFormValidate();

  // const [medData, setMyData] = useState({
  //   name: "",
  //   description: "",
  // });

  function validate(formData) {
    let errors = {};

    console.log("formData from vaditade");
    console.log(formData);

    if (!formData.name) {
      errors.name = "Neįvestas vaisto pavadinimas";
    }
    if (!formData.dosage) {
      errors.dosage = "Neįvestas vaisto dozavimas";
    }

    if (!formData.description) {
      errors.description = "Neįvestas vaisto aprašymas";
    } else {
      if (formData.description.length < 10) {
        errors.description = "Aprašyme turi buti ne mažiau 10 simboliu";
      }
    }
    console.log("errors from vaditade");
    console.log(errors);
    return errors;
  }

  // function formErrors(errors) {
    
  //   alert(`Klaidos: ${errors.name}  ${errors.description}`);
  // }

  
  function formErrors() {
    
    alert(`Įvesdami duomenis padarėte klaidų`);
  }

  ///////////

  const addMed = (formValues) => {
    //console.log(name, value);

    console.log(" formValues from addMed");
    console.log(formValues);

    // console.log(errors.name + " name");//undefined
    // console.log(errors.description + " description");

    fetch("http://localhost:3000/addMeds/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => alert(formValues.name + " vaistas pridetas"))
/// cia reik refreshint puslapi arba išvalyti forma
      .catch((err) => {
        console.error(err);
      });
  };

  //const { formValues, errors, handleChange, handleSubmit } = useFormValidate(
  const { errors, handleChange, handleSubmit } = useFormValidate(
    { name: "", description: "" },
    validate,
    addMed,
  // formErrors
  );

  // console.log("formValues"); //undefined
  // console.log(formValues); //undefined
  // console.log("errors222"); //undefined
  // console.log(errors); //undefined

  return (
    <div className="App">
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
        {errors && <span className="errorDiv">{errors.dosage}</span>}<br />
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
    // <div className="inputClass">
    //   <form onSubmit={handleSubmit}>
    //     {/* <form onSubmit={useInputValid()}>  */}
    //     {/*vietoj addMed kviesim useInputValid */}
    //     <input
    //       className="inputClass"
    //       type="text"
    //       id="name"
    //       name="name"
    //       placeholder="Name"
    //       // value={medData.name}
    //       onChange={handleChange}
    //     />
    //     <br />
    //     {errors && <span className="errorDiv">{errors.name}</span>}
    //     <br />
    //     <input
    //       className="inputClass"
    //       type="text"
    //       id="description"
    //       name="description"
    //       placeholder="Description"
    //       // value={medData.description}
    //       onChange={handleChange}
    //       //required
    //     />
    //     <br />
    //     {errors && <span className="errorDiv">{errors.description}</span>}
    //     <br />
    //     <ButtonSub />
    //   </form>
    // </div>
    // </div>
  );
}

export default AddMedication;
