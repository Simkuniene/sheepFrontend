import { useEffect } from "react";
import "./SheepList.css";
import { useFech } from "../../customHooks/useFech";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../customHooks/usePagination";
import Search from "../Search/Search";
import useSearchNumber from "../../customHooks/useSearchNumber";
import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import themeGreen from "../ThemeUi/ThemeUi";
import { Card, CardActions, CardContent } from "@mui/material";
import ResponsiveDialog from "../muiComponents/ResponsiveDialog.jsx";

function SheepListDelete() {
  const url = "http://localhost:3000/sheep";
  const { getData, getError, isLoading, myFetch } = useFech();

  useEffect(() => {
    myFetch(url);
  }, []);

  const { searchChange, filterName } = useSearchNumber(getData);

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

  const clickDelete = (deleteID) => {
    fetch("http://localhost:3000/deleteSheep/" + deleteID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        myFetch(url);
      })
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
            <Search changeFn={searchChange} />
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
                <Card key={item.number + "sheepDivDel"}>
                  <CardContent sx={{ display: "inline" }}>
                    {item.number}{" "}
                    {new Date(item.birth_date).toISOString().split("T")[0]}
                  </CardContent>
                  <CardActions sx={{ display: "inline" }}>
                    <ResponsiveDialog
                      sx={{ display: "inline" }}
                      keyProps={item._id + "del"}
                      delItem={item.number}
                      handleDelete={() => clickDelete(item._id)}
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

export default SheepListDelete;
