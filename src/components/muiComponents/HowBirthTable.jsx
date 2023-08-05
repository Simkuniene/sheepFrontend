import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import themeGreen from "../ThemeUi/ThemeUi";

import { useEffect} from "react";
//import { useParams } from "react-router-dom";


import { useFech } from "../../customHooks/useFech";




export default function HowBirthTable({sheepNumber}) {

    const { getData, getError, isLoading, myFetch } = useFech();

    useEffect(() => {
    
        myFetch("http://localhost:3000/births/"+sheepNumber);
        
      }, []);

// console.log("lambs_number_full");
// console.log(getData);

if (isLoading) {
    return <p>Loading...</p>;
  }

  if (getError != null) {
    console.log(getError);
    return <p>Klaida: {getError.error}</p>;
  } else {
    return (
        <p>Gimdymų skaičius  {getData.length}</p>
);
  }

}
