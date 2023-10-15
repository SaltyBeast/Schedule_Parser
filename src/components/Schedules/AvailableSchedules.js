import React from "react";

import Card from "../UI/Card";
import classes from "./AvailableSchedules.module.css";

const AvailableSchedules = ({ schedule }) => {

  return (
    <section className={classes.schedule}>
      <Card>
        <pre>
          <code>
            {JSON.stringify(schedule, null, 2)}
          </code>
        </pre>
      </Card>
    </section>
  );
};

export default AvailableSchedules;
