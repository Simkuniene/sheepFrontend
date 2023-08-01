import "./Pages.css";
//import LinkComp from "../LinkComp/LinkComp.jsx";
//import Medications from "../Medications/Medications.jsx";
////import AddMedication from "../AddPet/AddMedication.jsx";
import { useContext } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  // useParams,
  //  Link,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../Theme/Provider";
import Head from "../Head/Head";
import SheepList from "../SheepList/SheepList.jsx";
import { Box, Container } from "@mui/material";
import themeGreen from "../ThemeUi/ThemeUi.jsx";
import DrawerAppBar from "../muiComponents/DrawerAppBar";
//import Link from "@mui/material/Link";

const routes_komponentas = createBrowserRouter([
  {
    path: "/",
    element: (
      
      <div>
        <ThemeProvider theme={themeGreen}>
        <DrawerAppBar />
        <SheepList />
        </ThemeProvider>
      </div>
      
    ),
  },
  {
    path: "/meds",
    element: (
      <div>
         <ThemeProvider theme={themeGreen}>
        <DrawerAppBar />
        <h3>Vaistai</h3>
        </ThemeProvider>
        {/* <Medications /> */}
      </div>
    ),
  },
  {
    path: "/food",
    element: (
      <div>
        <ThemeProvider theme={themeGreen}>
        <DrawerAppBar />
        <h3>Pasarai</h3>
        </ThemeProvider>
        {/* <Food /> */}
      </div>
    ),
  },

  {
    path: "sheep/:number",
    element: (
      <div>
        <ThemeProvider theme={themeGreen}>
        <DrawerAppBar />
      
        {/* <OneSheep /> */}
        <h1>Viena avis</h1>
        </ThemeProvider>
      </div>
    ),
  },

  // {
  //   path: "/addsheep",
  //   element: (
  //     <div>
  //       
  //     </div>
  //   ),
  // },
  // {
  //   path: "/addMed",
  //   element: (
  //     <div>
  //       
  //      
  //     </div>
  //   ),
  // },

  //{
    //   path: "/addFood",
    //   element: (
    //     <div>
    //       
    //      
    //     </div>
    //   ),
    // },

]);

function Pages() {
  return (
    <div>
   
      <RouterProvider router={routes_komponentas}></RouterProvider>
    
    </div>
  );
}

export default Pages;


