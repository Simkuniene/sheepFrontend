import { useFormValidate } from "../../customHooks/useFormValidate.js";
import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
//import { useState, useReducer } from "react";
//import { useEffect, useState } from "react";


/////////////////////////////////////////////////////////////////////////
function AddMedication() {
  // const { state, isValid } = useFormValidate();

  // const [medData, setMyData] = useState({
  //   name: "",
  //   description: "",
  // });

 

function validate (formData) {
  let errors = {};

  if (formData.name.length===0)
  {errors.name = "Neivestas vaisto pavadinimas"}
  if (formData.description.length ===0)
  {errors.description = "Neivestas vaisto aprasymas"}
  else
  {if (formData.description.length < 10)
  {errors.description = "Aprasyme turi buti ne maziau 10 simboliu"}
  }
  return (errors)
}

  ///////////

  const addMed = (formValues) => {
    
    //console.log(name, value);

    // console.log(" medData");
    //console.log(medData);
 
    // console.log(errors.name + " name");//undefined
    // console.log(errors.description + " description");

    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/meds/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => alert(formValues.name + "Vaistas pridetas"))

      .catch((err) => {
        console.error(err);
      });
  };


const { formValues, errors, handleChange, handleSubmit } = useFormValidate(
  { name: "", description: "" },
  validate,
  addMed
);

console.log("formValues");//undefined
console.log(formValues);//undefined
console.log("errors");//undefined
console.log(errors);//undefined

  return (
    <div className="App">
      <div className="main">
        <form onSubmit={handleSubmit}>
          {/* <form onSubmit={useInputValid()}>  */}
          {/*vietoj addMed kviesim useInputValid */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            // value={medData.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            // value={medData.description}
            onChange={handleChange}
            required
          />
          <br />

          <ButtonSub />
        </form>
      </div>
    </div>
  );
}

export default AddMedication;
