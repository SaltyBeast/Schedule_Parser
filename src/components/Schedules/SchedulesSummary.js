import React from "react";

import classes from "./SchedulesSummary.module.css";

const SchedulesSummary = ({ title, showText }) => {
  return (
    <section className={classes.summary}>
      <h2>{title}</h2>
      {showText && (
        <>
          <p>
            It is necessary to make the same data structure for the schedule, in
            which there will be an equally readable schedule for the two
            schedules.
          </p>
          <p>
            That is, to be able to have a single structure for processing in the
            futre!
          </p>
        </>
      )}
    </section>
  );
};

export default SchedulesSummary;
