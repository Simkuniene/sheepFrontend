import { useEffect } from "react";
import { useFech } from "../../customHooks/useFech.js";
import Pagination from "../Pagination/Pagination.jsx";
import usePagination from "../../customHooks/usePagination.js";
import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import themeGreen from "../ThemeUi/ThemeUi.jsx";
import { Card, CardActions, CardContent } from "@mui/material";
import ResponsiveDialogMed from "../muiComponents/ResponsiveDialogMed.jsx";

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
  } = usePagination(getData, 6);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const clickDelete = (deleteNumber) => {
    fetch("http://localhost:3000/deleteMed/" + deleteNumber, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then(() => {
        myFetch(url);
      })

      //window.location.reload()
      .catch((err) => {
        console.error(err);
      });
    
  };

  if (getError != null) {
    return <p>Klaida: {getError.error}</p>;
  } else {
    return (
      <div>
        <ThemeProvider theme={themeGreen}>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                "& > :not(style)": {
                  m: 1,
                  width: 350,
                  height: 80,
                  bgcolor: themeGreen.palette.primary.dark,
                  padding: "20px",
                },
              }}
            >
              {pageData.map((item) => (
                <Card key={item._id + "MedDivDel"}>
                  <CardContent sx={{ display: "inline" }}>
                    {item.name}{" "}
                  </CardContent>
                  <CardActions sx={{ display: "inline" }}>
                    <ResponsiveDialogMed
                      sx={{ display: "inline" }}
                      keyProps={item._id + "delMed"}
                      delItem={item.name}
                      handleDelete={() => clickDelete(item._id)} ///sutvaryt su id
                    />
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

export default MedsList;
