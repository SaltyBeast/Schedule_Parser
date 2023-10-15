# Schedules Parser

Schedules Parser is a program that will make the same data structure for a schedule that will have the same readable schedule for two schedules.

## The problem

Lack of a single standard for the timetable.

## This solution

It was decided to accept schedules in json format following the tradition of http requests, using Firebase Realtime Database for this, then the data is formatted in JS objects and certain functions are performed that reduce the schedule to the same readable data structure. Structured data is stored in a JS object, which can later be converted to json format and sent for further processing.

I did a task with the help of JavaScript and made the output of the results using a web page using the React library, namely, I built a very small SPA with React Router. But if you want to see the data in the form of real objects, you can open the console in a web browser and it will be there, because I output the data there as well.

<img src="src\assets\firebasedb.png" alt="firebase" title="Firebase Realtime DB" width="300">

## Testing

There is one option for testing the program. The option is to run the program on your local server by following the steps below.

## Installation

Make a copy using git or download the project repository.
Then in project, use the node package manager [npm](https://www.npmjs.com/package/npm) to install all the needed project dependencies.

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\