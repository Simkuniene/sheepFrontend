import React from 'react';
// import { useEffect, useState } from "react";
import "./Button.css"

const Button = ({ text, unique_id, classN, clickEvent}) => (
  <div className="btn-wrapper">
   <button onClick = {clickEvent} key={unique_id} type="button" className={classN}>{text}</button>
  </div>
)


   //e.target.remove();
  

 // }

export default Button