import { createContext, useReducer } from "react";
//import Button from "../Button/Button";

function myReducer(previousState, action) {
  switch (action.type) {
    case "Dark": {
      return {
        ...previousState,
        // color: action.color,
        color: "white",
        backgroundColor: "grey",
        clicked: false,
      };
    }

    case "Light": {
      return {
        ...previousState,
        color: "black",
        backgroundColor: "white",
        clicked: true,
      };
    }

    default: {
      return previousState;
    }
  }
}

export const ThemeContext = createContext({
  color: "black",
  backgroundColor: "white",
  clicked: true,
  // updateFn: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, dispach] = useReducer(myReducer, {
    color: "black",
    backgroundColor: "white",
    clicked: true,
  });

  return (
    <>
      <ThemeContext.Provider
        value={{
          color: theme.color,
          backgroundColor: theme.backgroundColor,
          clicked: theme.clicked,
          dispach,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
}
