import React, { createContext } from "react";
import "./OneSheep.css";
import { useEffect, useState, useReducer, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import AddLog from "../Add/AddLog.jsx";
import { useFech } from "../../customHooks/useFech";
import SheepTable from "../muiComponents/SheepTable";
import BirthTable from "../muiComponents/BirthTable";
import { Stack } from "@mui/material";
import ButtonLinkMui from "../Button/ButtonLinkMui";
import TreatmentTable from "../muiComponents/TreatmentTable";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import themeGreen from "../ThemeUi/ThemeUi";
import AboutBirth from "../muiComponents/AboutBirth";
import AboutTreatment from "../muiComponents/AboutTreatment";
import DrawerAppBar from "../muiComponents/DrawerAppBar";


function OneSheep() {
  
  const params = useParams();
  
  const url = "http://localhost:3000/sheep/" + params.number;

  const { getData, getError, isLoading, myFetch } = useFech();

  // console.log("getData");
  // console.log(getData);
  localStorage.setItem('sheepData', JSON.stringify(getData[0]));


  // function createData(name, value) {
  //   return { name, value };
  // }
  
 
  useEffect(() => {
    myFetch(url);
  }, [params.number]);

  //////////////////////
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (getError != null) {
    console.log(getError);
    return <p>Klaida: {getError.error}</p>;
  } else {
    return (
      
      <div>
       




       
        <Stack direction="row" spacing={2} justifyContent="end">
          <Link to={`/addbirth`}>
            <ButtonLinkMui
              text="Pridėti gimdymus"
              uniqueKey="buttonBirthOneSheep"
            />
          </Link>
          <Link to={`/addtreatment`}>
            <ButtonLinkMui
              text="Aprašyti naudotus vaistus"
              uniqueKey="buttonMedsOneSheep"
            />
          </Link>
          <Link to={`/sheepupdate/${params.number}`}>
            <ButtonLinkMui 
              text="Atnaujinti duomenis"
              uniqueKey={params.number + "update"}
            />
          </Link>
        </Stack>
        <DrawerAppBar />
        <h2 style={{ margin: '10px' }}>
          {" "}
          <p>
            {getData[0].number} (
            {getData[0].gender === "4"
              ? "Ėriavedė"
              : getData[0].gender === "2"
              ? "Avis"
              : "Avinas"}{" "}
            {Math.floor(
              (new Date() - new Date(getData[0].birth_date)) /
                (1000 * 60 * 60 * 24 * 365.25)
            )}{" "}
            metų)
          </p>
        </h2>

        <div style={{ margin: '0 20%' }}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150, marginBottom: '1px', bgcolor: themeGreen.palette.primary.middle,}} aria-label="simple table">
        
        <TableBody>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
             
              <TableCell align="left">
              <div>
              <AboutBirth sheepNumber={params.number}/><br/>
              <AboutTreatment sheepNumber={params.number}/>
              </div>
               </TableCell>
        
            </TableRow>
       </TableBody>
      </Table>
    </TableContainer>
          <SheepTable sheepData={getData} />

  
        </div>

   
      </div>
    );
  }
}

export default OneSheep;
