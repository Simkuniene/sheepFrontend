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
import { ThemeProvider } from "../Theme/Provider";
import { ThemeContext } from "../Theme/Provider";
import Head from "../Head/Head";
import SheepList from "../SheepList/SheepList.jsx";
import { Box, Container } from "@mui/material";
import themeGreen from "../ThemeUi/ThemeUi.jsx";
//import Link from "@mui/material/Link";

const routes_komponentas = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Head />
        <SheepList />
      </div>
    ),
  },
  {
    path: "/meds",
    element: (
      <div>
        <Head />
        <h3>Vaistai</h3>
        {/* <Medications /> */}
      </div>
    ),
  },
  {
    path: "/food",
    element: (
      <div>
        <Head />
        <h3>Pasarai</h3>
        {/* <Food /> */}
      </div>
    ),
  },

  {
    path: "sheep/:number",
    element: (
      <div>
        <Head />
        {/* <OneSheep /> */}
        <h1>Viena avis</h1>
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


