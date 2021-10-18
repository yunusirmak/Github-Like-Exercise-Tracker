import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./calendar.css";
import SingleRect from "./SingleRect";
import Inputs from "./Inputs";
import ReactTooltip from "react-tooltip";

function Calendar() {
  const today = new Date();
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  return (
    <div>
      <h1>Enter Your Exercise Information</h1>
      <Inputs />
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
          tooltipDataAttrs={(value) => {
            return {
              "data-tip":
                value.date !== null
                  ? ` Day ${value.date} has ${value.count} contributions`
                  : "This day has 0 contributions",
            };
          }}
        />
        <ReactTooltip />
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
