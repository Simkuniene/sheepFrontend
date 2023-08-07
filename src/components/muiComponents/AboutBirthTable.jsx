import * as React from "react";
import "./muiComponents.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import themeGreen from "../ThemeUi/ThemeUi";
import { useEffect, useReducer } from "react";
import { useFech } from "../../customHooks/useFech";
import Button from "../Button/Button";
import BirthTable from "./BirthTable";

export default function AboutBirthTable({ sheepNumber }) {
  const [state, dispach] = useReducer(myReducer, {
    birthClicked: true,
    treatmentClicked: true,
  });

  function myReducer(previousState, action) {
    switch (action.type) {
      case "birth": {
        return {
          ...previousState,
          birthClicked: !previousState.birthClicked,
        };
      }

      case "treatment": {
        return {
          ...previousState,
          treatmentClicked: !previousState.treatmentClicked,
        };
      }

      default: {
        return previousState;
      }
    }
  }

  const { getData, getError, isLoading, myFetch } = useFech();

  useEffect(() => {
    myFetch("http://localhost:3000/births/" + sheepNumber);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (getError != null) {
    return <p>Klaida: {getError.error}</p>;
  } else {
    return (
      <>
        <Button
          text={state.birthClicked ? "Gimdymai" : "Gimdymai V"}
          unique_id={"birthsOne"}
          clickEvent={() => {
            dispach({
              type: "birth",
            });
          }}
        />

        <Button
          text={state.treatmentClicked ? "Gydymas" : "Gydymas V"}
          unique_id={"treatment"}
          clickEvent={() => {
            dispach({
              type: "treatment",
            });
          }}
        />

        <TableContainer component={Paper}>
          Gimdymai
          <Table
            sx={{ minWidth: 150, bgcolor: themeGreen.palette.primary.middle }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Gimdymo data</TableCell>
                <TableCell align="center">Ėriukų skaičius</TableCell>
                <TableCell align="right">Pastabos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getData.map((row, index) => (
                <TableRow
                  key={row.number + index + "birthTable"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {new Date(row.date).toISOString().split("T")[0]}
                  </TableCell>
                  <TableCell align="center">{row.lambs_number}</TableCell>
                  <TableCell align="right">{row.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div
          id="births"
          className={` ${state.birthClicked ? "hideDiv" : "main"} `}
        >
          <div style={{ margin: "10%" }}>
            {" "}
            <BirthTable sheepNumber={"GB12456"} />{" "}
          </div>
        </div>
      </>
    );
  }
}
