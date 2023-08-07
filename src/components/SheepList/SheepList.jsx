import { useEffect } from "react";
import "./SheepList.css";
import { Link } from "react-router-dom";
import { useFech } from "../../customHooks/useFech";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../customHooks/usePagination";
import Search from "../Search/Search";
import useSearch from "../../customHooks/useSearch";
import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import themeGreen from "../ThemeUi/ThemeUi";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import ButtonLinkMui from "../Button/ButtonLinkMui.jsx";

////////////////////

function SheepList() {
  const url = "http://localhost:3000/sheep";
  const { getData, getError, isLoading, myFetch } = useFech();

  useEffect(() => {
    myFetch(url);
  }, []);

  const { searchChange, filterName } = useSearch(getData);

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
    return <p>Klaida: {getError.error}</p>;
  } else {
    return (
      <div>
        <ThemeProvider theme={themeGreen}>
          <div>
            <h2>Avys</h2>
            <Stack direction="row" spacing={2} justifyContent="end">
              <Link to={`/deletesheep`}>
                <ButtonLinkMui
                  text="Panaikinti įrašą apie avis"
                  uniqueKey="buttonDeleteSheep"
                />
              </Link>
              <Link to={`/addsheep`}>
                <ButtonLinkMui
                  text="Aprašyti naują avį"
                  uniqueKey="buttonAddSheep"
                />
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
                      {item.number}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {new Date(item.birth_date).toISOString().split("T")[0]}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.breed}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.gender} (
                      {item.gender === "4"
                        ? "Ėriavedė"
                        : item.gender === "2"
                        ? "Avis"
                        : "Avinas"}
                      )
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" spacing={2}>
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
            </Box>

            <Pagination
              pageNumber={maxPages}
              currentPage={newCurrentPage}
              nextPageFn={nextPage}
              previousPageFn={previousPage}
              currentPageFn={goCurrentPage}
              isPreviousActive={isPreviousActive}
              isNextActive={isNextActive}
            />
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default SheepList;
