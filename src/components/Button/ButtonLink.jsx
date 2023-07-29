import React from 'react';
// import { useEffect, useState } from "react";
import "./Button.css"

const ButtonLink = ({ text, unique_id}) => (
  <div className="btn-wrapper">
   <button key={unique_id} type="button" className="btn">{text}</button>
  </div>
)


   //e.target.remove();
  

 // }

export default ButtonLink