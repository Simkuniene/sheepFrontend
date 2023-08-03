import React from "react";
import "./OneSheep.css";
import { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import AddLog from "../Add/AddLog.jsx";
import { perceptionsData } from "../../perceptions.js";
import { useFech } from "../../customHooks/useFech";
import SheepTable from "../muiComponents/SheepTable";
import BirthTable from "../muiComponents/BirthTable";

//import ButtonLink from "../Button/ButtonLink.jsx";

function OneSheep() {
  //const [count, setCount] = useState(0);

  // const [onePetData, setOnePetData] = useState([
  //   {
  //     id: 0,
  //     pet_id: 0,
  //     description: "0",
  //     status: "0",
  //     name: "0",
  //     dob: 0,
  //     client_email: "0",
  //     archived: 0,
  //   },
  // ]);
  //const [loadingData, setLoading] = useState(true);

  const [state, dispach] = useReducer(myReducer, {
    birthClicked: false,
    prescripClicked: false,
  });

  function myReducer(previousState, action) {
    switch (action.type) {
      case "birth": {
        return {
          ...previousState,
          birthClicked: !previousState.birthClicked,
        };
      }

      case "prescriptions": {
        return {
          ...previousState,
          prescripClicked: !previousState.prescripClicked,
        };
      }

      default: {
        return previousState;
      }
    }
  }

  // const [logClicked, setClicked] = useState(false);
  // const [prescripClicked, setPresClicked] = useState(false);
  const [formActive, setFormActive] = useState(false);

  const params = useParams();
  // console.log(params.id);
  const url = "http://localhost:3000/sheep/" + params.number;

  const { getData, getError, isLoading, myFetch } = useFech();
  // const { getBirthData, getBirthError, isBirthLoading, myFetchB } = useFech();
  console.log("getData");
  console.log(getData);

  useEffect(() => {
    myFetch(url);
  }, [params.number]);

  //////////////////////
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (getError != null) {
    console.log(getError);
    return <p>Klaida: {getError.error}</p>;
  } else {
    return (
      <div>
        <h2>
          {" "}
          <p>
            {getData[0].number} (
            {getData[0].gender === "4"
              ? "Ėriavedė"
              : getData[0].gender === "2"
              ? "Avis"
              : "Avinas"}{" "}
            {Math.floor(
              (new Date() - new Date(getData[0].birth_date)) /
                (1000 * 60 * 60 * 24 * 365.25)
            )}{" "}
            metų)
          </p>
        </h2>

        <div style={{ margin: "10%" }}>
          {" "}
          <SheepTable sheepData={getData} />{" "}
        </div>

        <div className="flexDivSpace">
          <div className="flexDivStart">
            <p>Display: </p>
            <Button
              text={state.birthClicked ? "Gimdymai" : "Gimdymai V"}
              unique_id={"birthsOne"}
              clickEvent={
                () => {
                  dispach({
                    type: "birth",
                  });
                }

                //  setClicked(!birthClicked)
              }
            />
            <Button
              text={state.prescripClicked ? "PRESCRIPTIONS" : "PRESCRIPTIONS V"}
              unique_id={"prescriptions"}
              clickEvent={
                () => {
                  dispach({
                    type: "prescriptions",
                  });
                }
                // setPresClicked(!prescripClicked)
              }
            />
          </div>
          <div className="flexDivEnd">
            {" "}
            <Button
              text="ADD PRESCRIPTION"
              unique_id={"addprescription"}
              // clickEvent={() => clickDelete(item.id)}
            />
            <Button
              text="ADD birth"
              unique_id={"addbirth"}
              clickEvent={() => setFormActive(!formActive)}
            />
            {formActive ? (
              <div className="addbirth">
                <AddLog petID={params.number} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div
          id="births"
          className={` ${state.birthClicked ? "hideDiv" : "main"} `}
        >
          {/* <div id="births" className="main"> */}
          {/*Cia reikia gauti duomenis is kitos lenteles /////////////////////////*/}
          <div style={{ margin: "10%" }}>
            {" "}
            <BirthTable sheepNumber={params.number}/>{" "}
          </div>
          Reik sutvarkyti
        </div>

        {!state.prescripClicked ? (
          <div id="perceptions" className="main">
            {/* {perceptionsData.map((item, index) => (
              <div className="petDiv">
                <div key={item.name + index+"petDiv"}>{item.name}</div>
                <div key={item.description + index+"petDiv"}>{item.description}</div>
                <div key={item.comment + index+"petDiv"}>{item.comment}</div>
              </div>
            ))} */}
            prescripClicked
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default OneSheep;
