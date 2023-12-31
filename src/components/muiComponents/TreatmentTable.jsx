import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import themeGreen from "../ThemeUi/ThemeUi";
import { useEffect } from "react";
import { useFech } from "../../customHooks/useFech";

export default function TreatmentTable({ sheepNumber }) {
  const { getData, getError, isLoading, myFetch } = useFech();

  useEffect(() => {
    myFetch("http://localhost:3000/treatment/" + sheepNumber);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (getError != null) {
    return <p>Klaida: {getError.error}</p>;
  } else {
    return (
      <TableContainer component={Paper}>
        Vaistų naudojimas
        <Table
          sx={{ minWidth: 150, bgcolor: themeGreen.palette.primary.middle }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Vaistas</TableCell>
              <TableCell align="right">Pradėta</TableCell>
              <TableCell align="right">Baigta</TableCell>
              <TableCell align="right">Dozė</TableCell>
              <TableCell align="right">Išlauka</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getData.map((row, index) => (
              <TableRow
                key={row.number + index + "birthTable"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.medicine}
                </TableCell>

                <TableCell align="right">
                  {" "}
                  {new Date(row.start).toISOString().split("T")[0]}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  {new Date(row.finish).toISOString().split("T")[0]}
                </TableCell>
                <TableCell align="right">{row.dosage}</TableCell>
                <TableCell align="right">
                  {" "}
                  {new Date(row.withdrawal).toISOString().split("T")[0]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
