import * as React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./SheepList.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
//import Pages from "./components/Pages/Pages";
import themeGreen from "../ThemeUi/ThemeUi";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

function SheepList() {
  const [loadingData, setLoading] = useState(true);
  const [sheepData, setSheepData] = useState([]);

  console.log(sheepData);

  async function myfetch() {
    setLoading(true);
    try {
      await fetch("http://localhost:3000/sheep")
        .then((res) => res.json())
        .then((data) => setSheepData(data));
    } catch (error) {
      console.log(error);
      return;
    }
    setLoading(false);
  }

  useEffect(() => {
    myfetch();
  }, []);

  if (loadingData) {
    return <p>Loading...</p>;
  }

  // const clickDelete = (petId) => {
  //   console.log(petId + "petId");
  //   const confirm = window.confirm("Ar tikrai norite istrinti");

  //   if (confirm) {
  //     console.log("deletas sukurtas");

  //     fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets/" + petId, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       //.then((data) => setMyData(data))
  //       .then(() => {
  //         myfetch();
  //         alert("Gyvunas istrintas");
  //       })

  //       //window.location.reload()
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // };

  return (
    <div className="App">
      <ThemeProvider theme={themeGreen}>
        {/* <Link to={`/addpet`}>
        {" "}
        <ButtonLink text="ADD PET" unique_id={"addPet"} />{" "}
      </Link> */}

        <div className="main">
          <Container maxWidth="xl">
            <Box
              className="minMainConteiner"
              sx={{
                bgcolor: themeGreen.palette.primary.superlight,
                height: "100vh",
              }}
            >
              <div className="mainCardDiv"
              >
                {sheepData.map((item) => (
                  <Card
                    key={item.number + "sheepDiv"}
                    sx={{ minWidth: 275, margin: 2 }}
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
                        {item.gender}
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
                      setDeleteId(item.id);
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
              </div>
            </Box>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default SheepList;
