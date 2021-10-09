import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./styles.css";

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
    </div>
  );
}

export default App;
