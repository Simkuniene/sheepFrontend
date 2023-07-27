//import LinkComp from "./components/PetsList/PetsList.jsx";
import "./Head.css";
import logo from "../img/petslogo.png";
import LinkComp from "../LinkComp/LinkComp.jsx";
//import PetsList from "../PetsList/PetsList.jsx";
//import Medications from "../Medications/Medications.jsx";
//import OnePet from "../OnePet/OnePet.jsx";
//import AddPet from "../AddPet/AddPet.jsx";
////import AddMedication from "../AddPet/AddMedication.jsx";
//import AddLog from "../AddPet/AddMedication.jsx";
import { useContext } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  // useParams,
  //  Link,
} from "react-router-dom";
import { ThemeProvider } from "../Theme/Provider";
import { ThemeContext } from "../Theme/Provider";
import { Box, Container } from "@mui/material";
import themeGreen from "../ThemeUi/ThemeUi";
import sheepfoto from "../../img/sheepFoto.jpg";
//import Button from "../Button/Button";
//import "./App.css";

function Head() {
  return (
    <div>
      <ThemeProvider>
        <Container maxWidth="xl">
          <Box
            className="headDiv minMainConteiner"
            sx={{
              bgcolor: themeGreen.palette.primary.main,
              // height: "70px",
            }}
          >
            <h1 style={{ color: themeGreen.palette.primary.darkText }}>
              Šimkūnų šeimos avių ūkis
            </h1>
            <img className="headFoto" src={sheepfoto} alt="sheep" />
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Box
            className="minMainConteiner"
            sx={{
              bgcolor: themeGreen.palette.primary.dark,
              // height: "100vh",
            }}
          >
            <div className="linkDiv">
              <div className="linkDivSmall">
                {" "}
                <LinkComp path="/" name="Avys" />
                <LinkComp path="/food" name="Pašarai" />
                <LinkComp path="/meds" name="Vaistai" />
              </div>
            </div>
          </Box>
        </Container>
        
      </ThemeProvider>
    </div>
  );
}

export default Head;
