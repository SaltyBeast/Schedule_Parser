import React from "react";
import Header from "../components/Layout/Header";
import classes from './../components/UI/Error.module.css';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={classes.modal}>
          <img
            src="https://100dayscss.com/codepen/alert.png"
            alt="errorImage"
            width="60"
            height="45"
          />
          <h1>An error occurred!</h1>
          <p>Could not find this page!</p>
        </section>
      </main>
    </>
  );
};

export default ErrorPage;
