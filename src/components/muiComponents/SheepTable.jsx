import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import themeGreen from "../ThemeUi/ThemeUi";

export default function SheepTable({ sheepData }) {
  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData(
      "Gimimo data",
      new Date(sheepData[0].birth_date).toISOString().split("T")[0]
    ),
    createData("Lytis", sheepData[0].gender),
    createData("Veislė", sheepData[0].breed),
    createData("Motina", sheepData[0].mother),
    createData("Tėvas", sheepData[0].father),
    createData(
      "Užregistravimo data",
      new Date(sheepData[0].registration_date).toISOString().split("T")[0]
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 150, bgcolor: themeGreen.palette.primary.middle }}
        aria-label="simple table"
      >
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
