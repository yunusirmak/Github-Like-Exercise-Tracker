import React from "react";
import TextField from "@mui/material/TextField";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./calendar.css";
import SingleRect from "./SingleRect";
//Mui components
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { autocompleteClasses } from "@mui/material";

function Calendar() {
  const today = new Date();
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <h1>Enter Your Exercise Information</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            margin: "auto",
            width: "60%",
            minWidth: 120,
            borderRadius: "16px",
          },
        }}
      >
        <Paper elevation={3} className="inputPaper">
          <FormControl fullWidth sx={{ margin: 2 }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ margin: 2 }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" color="success">
            Submit
          </Button>
        </Paper>
      </Box>
      <br />
      <div className="container">
        <CalendarHeatmap
          startDate={shiftDate(today, -365)}
          showWeekdayLabels={true}
          endDate={today}
          values={[
            { date: "2021-09-01", count: 1 },
            { date: "2021-10-07", count: 3 },
            { date: "2021-10-08", count: 4 },
            { date: "2021-10-09", count: 2 },
            // ...and so on
          ]}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
        />
        <p className="centerer">More</p>
        <SingleRect rectColor="#1e6823" />
        <SingleRect rectColor="#44a340" />
        <SingleRect rectColor="#8cc665" />
        <SingleRect rectColor="#d6e685" />
        <SingleRect rectColor="#eeeeee" />
        <p className="centerer">Less</p>
      </div>
      <p>Some Info</p>
    </div>
  );
}

export default Calendar;
