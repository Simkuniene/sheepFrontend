import { useReducer } from "react";

export function useFormValidate(validateFn, submitFn) {
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

  let initialState = {};
  const [state, dispach] = useReducer(reducerFn, {
    fValues: initialState,
  });

  const handleChange = (event) => {
    const { name, value } = event.target; //input name ir value reiksmes

    dispach({
      type: "newFormValues",
      values: { name: name, value: value },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorsValidate = validateFn(state.fValues);

    if (Object.keys(errorsValidate).length !== 0) {
      dispach({
        type: "errors",
        errors: errorsValidate,
      });
    } else {
      submitFn(state.fValues);
    }
  };

  return {
    errors: state.errors,
    handleChange,
    handleSubmit,
  };
}
