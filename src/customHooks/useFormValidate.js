import {useReducer } from "react";
//import { useEffect, useState } from "react";

export function useFormValidate(formValue, validateFn, submitFn, errorsFn) {
  function reducerFn(previousState, action) {
    switch (action.type) {
      case "newFormValues": {
        return {
          ...previousState,
          fValues: {
            ...previousState.fValues,
            [action.values.name]: action.values.value,
          },
          errors: {},
        };
      }
      case "errors": {
        return {
          ...previousState,
          errors: action.errors,
        };
      }
      default: {
        return previousState;
      }
    }
  }

  let initialState = { formValue };

  const [state, dispach] = useReducer(reducerFn, {
    fValues: initialState,
    //errors: { all: true },
  });

  //let oldData = {};
  // const [formData, setFormData] = useState({
  //   name: "",
  //   description: "",
  // });

  const handleChange = (event) => {
    const { name, value } = event.target; //input name ir value reiksmes
    //  console.log(name, value);
    //... pridedu visus buvusius ordertData elementus ir ...

    // setFormData((oldData) => ({
    //   ////kodel state sekanciu pasp atsinaujina????????
    //   ...oldData,
    //   [name]: value,
    // }));
    console.log(name, value);
    // console.log(" oldData i state'a");
    // console.log(formData);
    // const errorsValidate = validateFn(newData);

    // console.log("errorsValidate");
    // console.log(errorsValidate);
    // console.log(Object.keys(errorsValidate).length);

    // if (Object.keys(errorsValidate).length === 0) {
    //   console.log("be klaidu");
    dispach({
      type: "newFormValues",
      values: { name: name, value: value },
    });
    // } else {
    //   console.log("su klaidom");
    //   dispach({
    //     type: "errors",
    //     errors: errorsValidate,
    //   });
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //   console.log("state.errors from submit");
    //   console.log(state.errors);
    //  // console.log(state.errors === undefined);

    //   if (!state.errors)
    //   {console.log("falsasssss")}

    console.log("state.fValues");
    console.log(state.fValues);

    const errorsValidate = validateFn(state.fValues);

    console.log("errorsValidate po validate f-jos");
    console.log(errorsValidate);

    if (Object.keys(errorsValidate).length !== 0) {
      console.log("su klaidom");
      console.log(errorsValidate);

      dispach({
        type: "errors",
        errors: errorsValidate,
      });

      errorsFn(errorsValidate);
    } else {
      submitFn(state.fValues);
    }

    // console.log("state.errors222");
    //  console.log(state.errors);

    // if (!state.errors)
    // {submitFn(state.fValues);}
    // else {
    //   console.log("perduoda i errorsFn")
    //   console.log(state.errors)
    //   errorsFn(state.errors)
    // }

    //////////////////
    // if (Object.keys(state.errors).length === 0) {
    //   submitFn(state.fValues);
    // } else {
    //   errorsFn(state.errors);
    // }
    ////////////////
  };
  ///////////////////////////
  console.log("state.fValues");
  console.log(state.fValues);

  console.log("state.errors");
  console.log(state.errors);

  return {
    formValues: state.fValues,
    errors: state.errors,
    handleChange,
    handleSubmit,
  };
}
