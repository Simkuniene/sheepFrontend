import React from "react";
// import Table from "./components/Table/table.jsx";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LinkComp.css";

function LinkComp({ path, name } ) {
  // path, name objekto key
 //const { path, name } = props;
  return (
    <div className="linkDiv">
      <Link className="link" to={path}>{name}</Link> 
    </div>
  );
}

export default LinkComp;
