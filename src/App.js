import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Head from "./components/Head/Head";
import Pages from "./components/Pages/Pages";

//import SheepList from "./components/SheepList/SheepList";

function App() {
  return (
    <div className="App">
      <div>
        <Pages />
      </div>
    </div>
  );
}

export default App;
