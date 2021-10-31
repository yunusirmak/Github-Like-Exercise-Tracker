import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { textAlign } from "@mui/system";

function DayInfo(props) {
  const dates = props.dateArray;
  const lastItem = dates[dates.length - 1].exercise;
  const listItems = lastItem.map((lastItem) => (
    <li style={{ textAlign: "left" }}>{lastItem}</li>
  ));
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 3,
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
            <h1>Activities</h1>
            <ul style={{ display: "table", margin: "0 auto" }}>{listItems}</ul>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default DayInfo;
