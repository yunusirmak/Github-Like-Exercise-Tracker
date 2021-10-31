import React, { useState } from "react";
import Calendar from "./Calendar";
import "./styles.css";
//Mui Components
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";

function Inputs() {
  var today = new Date();
  var currentDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [currentExercise, setCurrentExercise] = useState({
    date: currentDate,
    count: 1,
    number: "",
    unit: "",
    exercise: [],
  });
  const [dates, setDates] = useState([
    { date: "2021-09-01", count: 1 },
    { date: "2021-10-07", count: 3 },
    { date: "2021-10-08", count: 4 },
    { date: "2021-10-09", count: 2 },
  ]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCurrentExercise((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    setCurrentExercise((prevValue) => {
      return {
        ...prevValue,
        count: prevValue.count + 1,
      };
    });
    setDates([...dates, currentExercise]);
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            margin: "auto",
            width: "60%",
            minWidth: 300,
            borderRadius: "16px",
          },
        }}
      >
        <Paper elevation={3} className="inputPaper">
          <div className="insidePaper">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={10} xl={8}>
                <TextField
                  fullWidth
                  sx={{ m: 1 }}
                  xs={8}
                  id="outlined-basic"
                  label="Exercise"
                  variant="outlined"
                  placeholder="Squats"
                  onChange={handleChange}
                  value={currentExercise.exercise}
                  name="exercise"
                />
              </Grid>
            </Grid>
          </div>
          <div style={{ position: "relative", padding: 10 }}>
            <Fab
              aria-label="add"
              sx={{
                m: 1,
                backgroundColor: "#44a340",
                color: "white",
                width: 56,
                minWidth: 56,
                bottom: 0,
                right: 0,
                position: "absolute",
              }}
              onClick={handleSubmit}
            >
              <AddIcon />
            </Fab>
          </div>
        </Paper>
      </Box>
      <Calendar dateArray={dates} />
    </div>
  );
}

export default Inputs;
