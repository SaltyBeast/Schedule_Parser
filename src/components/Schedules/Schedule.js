import React, { useEffect, useState } from "react";

import AvailableSchedules from "./AvailableSchedules";
import SchedulesSummary from "./SchedulesSummary";

const Schedule = ({ whatSchedule, showText }) => {
  const [schedules, setSchedules] = useState(null);
  const [structeredSchedule, setStructeredSchedule] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(
        `https://schedulenaukma-default-rtdb.firebaseio.com/schedules/${whatSchedule}.json`
      );
      const responseData = await response.json();
      const data = responseData;
      console.log(data);
      setSchedules({ [whatSchedule]: data });
    };

    fetchSchedule();
  }, [whatSchedule]);

  useEffect(() => {
    const parseSchedule = (schedules) => {
      const res = {};
      const { schedule, specialties } = schedules[whatSchedule];
      for (const day in schedule) {
        for (const time in schedule[day]) {
          for (const lessons of schedule[day][time]) {
            for (const subject in lessons) {
              let isDefined = false;
              const { group, week, classes, instructor } = lessons[subject];
              for (const specialty of specialties) {
                if (
                  subject.includes(
                    "(" + specialty.toLowerCase().substring(0, 2)
                  ) ||
                  subject.includes(
                    specialty.toLowerCase().substring(0, 2) + ")"
                  ) ||
                  subject.includes(
                    specialty.toLowerCase().substring(0, 2) + ","
                  )
                ) {
                  isDefined = true;
                  defineSubject(
                    res,
                    whatSchedule,
                    specialty,
                    subject,
                    group,
                    time,
                    week,
                    instructor,
                    classes,
                    day
                  );
                }
              }
              if (!isDefined) {
                specialties.forEach((specialty) => {
                  defineSubject(
                    res,
                    whatSchedule,
                    specialty,
                    subject,
                    group,
                    time,
                    week,
                    instructor,
                    classes,
                    day
                  );
                });
              }
            }
          }
        }
      }
      setStructeredSchedule(res);
      setDataLoaded(true);
    };

    if (schedules) parseSchedule(schedules);
  }, [schedules]);

  const defineSubject = (
    res,
    faculty,
    specialty,
    subject,
    group,
    time,
    week,
    instructor,
    classes,
    day
  ) => {
    res[faculty] = res[faculty] || {};
    res[faculty][specialty] = res[faculty][specialty] || {};
    res[faculty][specialty][subject] = res[faculty][specialty][subject] || {};
    let groupName = "лекція";
    if (typeof group === "number") {
      groupName = group + " група";
    }
    res[faculty][specialty][subject][groupName] = {
      "назва групи": group,
      викладач: instructor,
      час: time,
      тижні: week,
      аудиторія: classes,
      "день тижня": day,
    };
  };

  return (
    <div>
      <SchedulesSummary
        title={whatSchedule + " Schedule"}
        showText={showText}
      />
      {dataLoaded && whatSchedule === "FI" && (
        <AvailableSchedules schedule={structeredSchedule} />
      )}
      {dataLoaded && whatSchedule === "FEN" && (
        <AvailableSchedules schedule={structeredSchedule} />
      )}
    </div>
  );
};

export default Schedule;
