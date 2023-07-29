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

  //   const [getData, setgetData] = useState([]);
  //   const [getError, setError] = useState(null);
  //   const [isLoading, setLoading] = useState(true);

  async function myFetch(url) {
    dispach({
      type: "Loading",
      loading: true,
    });
    //setLoading(true);
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      //   .then((data) => setgetData(data));
      if (data.error) {
        dispach({
          type: "Error",
          error: data,
        });
        //setError(data);
      } else {
        dispach({
          type: "Data",
          data: data,
        });

        //setgetData(data);
      }
    } catch (error) {
      dispach({
        type: "Error",
        error: error,
      });
      // setError(error);
    }
    dispach({
      type: "Loading",
      loading: false,
    });
    // setLoading(false);
  }

  //useEffect(() => {

  //   myFech();
  // }, [url]);

  return { ...state, myFetch };
  // return { getData, getError, isLoading };
} //end useFech
