import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFech } from "../../customHooks/useFech.js";
import Pagination from "../Pagination/Pagination.jsx";
import usePagination from "../../customHooks/usePagination.js";
import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import themeGreen from "../ThemeUi/ThemeUi.jsx";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";

////////////////////

function MedsList() {
  const url = "http://localhost:3000/meds";
  const { getData, getError, isLoading, myFetch } = useFech();

  useEffect(() => {
    myFetch(url);
  }, []);

  const {
    maxPages,
    newCurrentPage,
    pageData,
    isPreviousActive,
    isNextActive,
    nextPage,
    previousPage,
    goCurrentPage,
  } = usePagination(getData, 6); //vietoj filterName

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
            <h2>Vaistai</h2>
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

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                "& > :not(style)": {
                  m: 1,
                  width: 128,
                  height: 150,
                  bgcolor: themeGreen.palette.primary.middle,
                },
              }}
            >
              {pageData.map((item, i) => (
                <Card
                  key={item.name + i + "medDiv"}
                  sx={{ minWidth: 250, margin: 2 }}
                >
                  <CardContent sx={{ textAlign: "left" }}>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Dozavimas: {item.dosage}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Išlauka: {item.withdrawal}
                    </Typography>
                  </CardContent>
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

export default MedsList;
