import { useReducer } from "react";

function myReducer(previousState, action) {
  switch (action.type) {
    case "Loading": {
      return {
        ...previousState,
        isLoading: action.loading,
      };
    }

    case "Error": {
      return {
        ...previousState,
        getError: action.error,
      };
    }
    case "Data": {
      return {
        ...previousState,
        getData: action.data,
      };
    }
    default: {
      return previousState;
    }
  }
}

export function useFech() {
  const [state, dispach] = useReducer(myReducer, {
    getData: [],
    getError: null,
    isLoading: true,
  });

  async function myFetch(url) {
    dispach({
      type: "Loading",
      loading: true,
    });

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.error) {
        dispach({
          type: "Error",
          error: data,
        });
      } else {
        dispach({
          type: "Data",
          data: data,
        });
      }
    } catch (error) {
      dispach({
        type: "Error",
        error: error,
      });
    }
    dispach({
      type: "Loading",
      loading: false,
    });
  }

  return { ...state, myFetch };
}
