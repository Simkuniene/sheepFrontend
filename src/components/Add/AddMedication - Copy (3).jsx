import { useFormValidate } from "../../customHooks/useFormValidate.js";
import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import { useState } from "react";
//import { useEffect, useState } from "react";

/////////////////////////////////////////////////////////////////////////
function AddMedication() {
  //const { state, isValid } = useFormValidate();
  // const [errorsState, setErrors] = useState({
  //   name: "",
  //   description: "",
  // });
  // const [medData, setMyData] = useState({
  //   name: "",
  //   description: "",
  // });

  function validate(formData) {
    let errors = {};

    console.log("formData from vaditade");
    console.log(formData);

    if (!formData.name) {
      errors.name = "Neivestas vaisto pavadinimas";
    }
    if (!formData.description) {
      errors.description = "Neivestas vaisto aprasymas";
    } else {
      if (formData.description.length < 10) {
        errors.description = "Aprasyme turi buti ne maziau 10 simboliu";
      }
    }
    console.log("errors from vaditade");
    console.log(errors);
    return errors;
  }

  function formErrors(errors) {
    if (!errors.name) {
      errors.name = "";
    }
    if (!errors.description) {
      errors.description = "";
    }
    alert(`Klaidos: ${errors.name}  ${errors.description}`);
  }

  ///////////

  const addMed = (formValues) => {
    //console.log(name, value);

    console.log(" formValues from addMed");
    console.log(formValues);

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
      .then((data) => alert(formValues.name + " vaistas pridetas"))

      .catch((err) => {
        console.error(err);
      });
  };

  const { formValues, errorsH, handleChange, handleSubmit } = useFormValidate(
    { name: "", description: "" },
    validate,
    addMed,
    formErrors
  );

 
  console.log("formValues"); //undefined
  console.log(formValues); //undefined
 console.log("errorsH"); //undefined
  console.log(errorsH); //undefined

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
          {errorsH && (
            <div className="errorDiv">"Neivedet"</div>
          )}
          <br />
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            // value={medData.description}
            onChange={handleChange}
            //required
          />
          <br />
          <div className="errorDiv"></div>
          <br />
          <ButtonSub />
        </form>
      </div>
    </div>
  );
}

export default AddMedication;
