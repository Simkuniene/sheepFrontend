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
import SheepListDelete from "../SheepList/SheepListDelete.jsx";
import { Box, Container } from "@mui/material";
import themeGreen from "../ThemeUi/ThemeUi.jsx";
import DrawerAppBar from "../muiComponents/DrawerAppBar";
import AddSheep from "../Add/AddSheep";
import AddMedication from "../Add/AddMedication";
import MedsList from "../MedsList/MedsList";
import MedsListDelete from "../MedsList/MedsListDelete";
import AddBirth from "../Add/AddBirth";
import OneSheep from "../OneSheep/OneSheep";

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
          <MedsList />
        </ThemeProvider>
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
          <OneSheep />
        </ThemeProvider>
      </div>
    ),
  },

  {
    path: "/addsheep",
    element: (
      <div>
        <ThemeProvider theme={themeGreen}>
          <DrawerAppBar />
          <h1>Prideti avi</h1>
          <AddSheep />
        </ThemeProvider>
      </div>
    ),
  },

  {
    path: "/addbirth",
    element: (
      <div>
        <ThemeProvider theme={themeGreen}>
          <DrawerAppBar />
          <h1>Prideti avi</h1>
          <AddBirth />
        </ThemeProvider>
      </div>
    ),
  },
  {
    path: "/deletesheep",
    element: (
      <div>
        <ThemeProvider theme={themeGreen}>
          <DrawerAppBar />
          <SheepListDelete />
        </ThemeProvider>
      </div>
    ),
  },
  {
    path: "/addMed",
    element: (
      <div>
        <ThemeProvider theme={themeGreen}>
          <DrawerAppBar />
          <AddMedication />
        </ThemeProvider>
      </div>
    ),
  },
  {
    path: "/deleteMeds",
    element: (
      <div>
        <ThemeProvider theme={themeGreen}>
          <DrawerAppBar />
          <MedsListDelete />
        </ThemeProvider>
      </div>
    ),
  },

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
