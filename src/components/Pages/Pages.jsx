import "./Pages.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import SheepList from "../SheepList/SheepList.jsx";
import SheepListDelete from "../SheepList/SheepListDelete.jsx";
import themeGreen from "../ThemeUi/ThemeUi.jsx";
import DrawerAppBar from "../muiComponents/DrawerAppBar";
import AddSheep from "../Add/AddSheep";
import AddMedication from "../Add/AddMedication";
import MedsList from "../MedsList/MedsList";
import MedsListDelete from "../MedsList/MedsListDelete";
import AddBirth from "../Add/AddBirth";
import AddTreatment from "../Add/AddTreatment";
import OneSheep from "../OneSheep/OneSheep";
import UpdateSheep from "../Add/UpdateSheep";

const routes_comp = createBrowserRouter([
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
          <h3>Čia bus pašarų normos</h3>
        </ThemeProvider>
        {/* <Food /> */}
      </div>
    ),
  },

  {
    path: "/sheep/:number",
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
          <AddSheep />
        </ThemeProvider>
      </div>
    ),
  },

  {
    path: "/sheepupdate/:number",
    element: (
      <div>
        <ThemeProvider theme={themeGreen}>
          <DrawerAppBar />
          <UpdateSheep />
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
          <AddBirth />
        </ThemeProvider>
      </div>
    ),
  },

  {
    path: "/addtreatment",
    element: (
      <div>
        <ThemeProvider theme={themeGreen}>
          <DrawerAppBar />
          <AddTreatment />
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
      <RouterProvider router={routes_comp}></RouterProvider>
    </div>
  );
}

export default Pages;
