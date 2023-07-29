import { useEffect, useReducer, useState } from "react";
//import Button from "../Button/Button";
import ButtonLink from "../Button/ButtonLink.jsx";
import "./SheepList.css";
import { Link } from "react-router-dom";
import { useFech } from "../../customHooks/useFech";
import ClickBox from "../ClickBox/ClickBox";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../customHooks/usePagination";
import Search from "../Search/Search";
import useSearch from "../../customHooks/useSearch";

import * as React from "react";
import Box from "@mui/material/Box";
//import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
//import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
//import Typography from "@mui/material/Typography";
//import { Margin } from "@mui/icons-material";
//import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import themeGreen from "../ThemeUi/ThemeUi";
import {
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

////////////////////

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

function SheepList() {
  const url = "http://localhost:3000/sheep";
  const { getData, getError, isLoading, myFetch } = useFech();
  const [showClickBox, setshowClickBox] = useState(false);
  const [deleteNumber, setDeleteNumber] = useState(false);

  useEffect(() => {
    myFetch(url);
  }, []);

  const { searchChange, filterName } = useSearch(getData);

  // console.log("filterName from useSearch");
  // console.log(filterName);

  const {
    maxPages,
    newCurrentPage,
    pageData,
    isPreviousActive,
    isNextActive,
    nextPage,
    previousPage,
    goCurrentPage,
  } = usePagination(filterName, 3); //vietoj getData

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const clickDelete = () => {
    console.log(deleteNumber + "sheepId");
    const confirm = window.confirm("Ar tikrai norite istrinti");

    if (confirm) {
      console.log("deletas sukurtas");

      fetch(
        "http://localhost:3000/deleteSheep/" + deleteNumber,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        //.then((data) => setMyData(data))
        .then(() => {
          myFetch(url);
          alert("Gyvunas istrintas");
          setshowClickBox(false);
        })

        //window.location.reload()
        .catch((err) => {
          console.error(err);
        });
    }
  };

  if (getError != null) {
    console.log(getError);
    return <p>Klaida: {getError.error}</p>;
  } else {
    return (
      <div className="App">
        <ThemeProvider theme={themeGreen}>
          <div className="main">
            <Container maxWidth="xl">
              <Box
                className="minMainConteiner"
                sx={{
                  bgcolor: themeGreen.palette.primary.superlight,
                  height: "100vh",
                }}
              >
                <h2>Avys</h2>

                <Link to={`/addsheep`}>
                  {" "}
                  <ButtonLink
                    text="Įvesti naują avį"
                    unique_id={"addsheep"}
                  />{" "}
                </Link>

                <Search changeFn={searchChange} />

                <div className="mainCardDiv">
                  {/* <Stack direction="row" spacing={2}> */}
                  {pageData.map((item) => (
                    <Card
                      key={item.number + "sheepDiv"}
                      sx={{ minWidth: 275, margin: 2 }}
                    >
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {item.number}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {
                            new Date(item.birth_date)
                              .toISOString()
                              .split("T")[0]
                          }
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {item.breed}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {item.gender}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Stack direction="row" spacing={2}>
                          <Button
                            key={item.id + "del"}
                            variant="contained"
                            style={{ backgroundColor: "rgb(249, 131, 21)" }}
                            onClick={() => {
                              setshowClickBox(true);
                              setDeleteNumber(item.number);
                            }}
                          >
                            Delete
                          </Button>
                          <Link to={`sheep/${item.number}`}>
                            {" "}
                            <Button
                              key={item.id + "view"}
                              variant="contained"
                              style={{
                                backgroundColor:
                                  themeGreen.palette.primary.main,
                              }}
                            >
                              APIE
                            </Button>
                          </Link>
                        </Stack>
                      </CardActions>
                    </Card>
                  ))}

                  {/* </Stack> */}
                </div>

                <Pagination
                  pageNumber={maxPages}
                  currentPage={newCurrentPage}
                  nextPageFn={nextPage}
                  previousPageFn={previousPage}
                  currentPageFn={goCurrentPage}
                  isPreviousActive={isPreviousActive}
                  isNextActive={isNextActive}
                />
                <div>
                  {showClickBox && (
                    <ClickBox
                      text="Ar tikrai norite istrinti?"
                      funcClickOk={clickDelete}
                      funcClickCancel={() => {
                        setshowClickBox(false);
                        setDeleteNumber();
                      }}
                    />
                  )}
                </div>
              </Box>
            </Container>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default SheepList;
