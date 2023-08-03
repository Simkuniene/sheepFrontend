import { useEffect, useReducer, useState } from "react";
//import Button from "../Button/Button";
import ButtonLink from "../Button/ButtonLink.jsx";
//import "./SheepList.css";
import { Link } from "react-router-dom";
import { useFech } from "../../customHooks/useFech.js";
import ClickBox from "../ClickBox/ClickBox.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import usePagination from "../../customHooks/usePagination.js";
import Search from "../Search/Search.jsx";
import useSearch from "../../customHooks/useSearch.js";

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
import themeGreen from "../ThemeUi/ThemeUi.jsx";
import {
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
//import ButtonAppBar from "../muiComponents/ButtonAppBar.jsx";
//import DrawerAppBar from "../muiComponents/DrawerAppBar.jsx";
//import SimplePaper from "../muiComponents/SimplePaper.jsx";

////////////////////

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

function MedsList() {
  const url = "http://localhost:3000/meds";
  const { getData, getError, isLoading, myFetch } = useFech();
  // const [showClickBox, setshowClickBox] = useState(false);
  // const [deleteNumber, setDeleteNumber] = useState(false);

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
  } = usePagination(filterName, 6); //vietoj getData

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (getError != null) {
    console.log(getError);
    return <p>Klaida: {getError.error}</p>;
  } else {
    return (
      <div>
        <ThemeProvider theme={themeGreen}>
          <div>
            <h2>Avys</h2>
            <Stack direction="row" spacing={2} justifyContent="end">
              <Link to={`/deleteMeds`}>
                <Button
                  key={"buttonDeleteSheep"}
                  variant="contained"
                  style={{
                    backgroundColor: themeGreen.palette.primary.dark,
                    marginRight: "10px",
                  }}
                >
                  Ištrinti vaistą
                </Button>
              </Link>
              <Link to={`/addMed`}>
                <Button
                  key={"buttonAddSheep"}
                  variant="contained"
                  style={{
                    backgroundColor: themeGreen.palette.primary.dark,
                    marginRight: "10px",
                  }}
                >
                  Aprašyti naują vaistą
                </Button>
              </Link>
            </Stack>

            <Search changeFn={searchChange} />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                "& > :not(style)": {
                  m: 1,
                  width: 128,
                  height: 220,
                  bgcolor: themeGreen.palette.primary.middle,
                },
              }}
            >
              {pageData.map((item) => (
                <Card
                  key={item.number + "sheepDiv"}
                  sx={{ minWidth: 250, margin: 2 }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.dosage}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" spacing={2}>
                      {/* <Button
                        key={item.id + "del"}
                        variant="contained"
                        style={{ backgroundColor: "rgb(249, 131, 21)" }}
                        onClick={() => {
                          setshowClickBox(true);
                          setDeleteNumber(item.number);
                        }}
                      >
                        Delete
                      </Button> */}
                      <Link to={`sheep/${item.number}`}>
                        {" "}
                        <Button
                          key={item.id + "view"}
                          variant="contained"
                          style={{
                            backgroundColor: themeGreen.palette.primary.main,
                          }}
                        >
                          APIE
                        </Button>
                      </Link>
                    </Stack>
                  </CardActions>
                </Card>
              ))}

              {/* <Paper elevation={0} />

              <Paper />
              <Paper elevation={3} /> */}
            </Box>

            {/* <Container maxWidth="xl">
              <Box
                className="minMainConteiner"
                sx={{
                  bgcolor: themeGreen.palette.primary.superlight,
                  height: "100vh",
                }}
              > */}

            <Pagination
              pageNumber={maxPages}
              currentPage={newCurrentPage}
              nextPageFn={nextPage}
              previousPageFn={previousPage}
              currentPageFn={goCurrentPage}
              isPreviousActive={isPreviousActive}
              isNextActive={isNextActive}
            />
            {/* <div>
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
            </div> */}
            {/* </Box>
            </Container> */}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default MedsList;
