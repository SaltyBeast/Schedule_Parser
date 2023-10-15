import React from "react";

import classes from "./Header.module.css";
import scheduleImage from "../../assets/scheduel.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Schedule</h1>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fi_schedule"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                FI Schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fen_schedule"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                FEN Schedule
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes["main-image"]}>
        <img src={scheduleImage} alt="Schedule Logo" />
      </div>
    </React.Fragment>
  );
};

export default Header;
