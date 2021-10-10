import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./calendar.css";
import SingleRect from "./SingleRect";

function App() {
  const today = new Date();
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  return (
    <div>
      <h1>Track your exercise!</h1>
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
        <p style={{ display: "inline-block" }}>Less</p>
        <SingleRect rectColor="#eeeeee" />
        <SingleRect rectColor="#d6e685" />
        <SingleRect rectColor="#8cc665" />
        <SingleRect rectColor="#44a340" />
        <SingleRect rectColor="#1e6823" />
        <p style={{ display: "inline-block" }}>More</p>
      </div>
      <h1>Track your exercise!</h1>
      <h1>Track your exercise!</h1>
      <h1>Track your exercise!</h1>
      <h1>Track your exercise!</h1>
      <h1>Track your exercise!</h1>
    </div>
  );
}

export default App;
