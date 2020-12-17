# Interview Scheduler

## Summary

The **Interview Scheduler** is a single-page web application built using *[React](https://reactjs.org/)*.

The app allows the user to book an appointment with a select list of interviewers throughout any day of the week.

Data is persisted by the API server which is using a *[PostgreSQL](https://www.postgresql.org)* database. The client application communicates with an API server over HTTP, using JSON.

During development, testing was done using *[Storybook](https://storybook.js.org)*, *[Jest](https://jestjs.io)* and *[Cypress](https://www.cypress.io)*.

---
## Tools Used
- React
- Babel
- Webpack
- Webpack Dev Server
- Axios
- Jest
- Storybook
- React Testing Library
- Cypress

---
## Preview
!["Preview"](https://github.com/dlinardi/scheduler/blob/master/docs/scheduler-preview.gif)

---
## Setup

### Dependencies
- Axios
- Classnames
- Normalize.css
- React
- React-DOM
- React-Scripts

---

Install all dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running API Server

- while in 

```sh
npm run start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress Visual Testbed

```sh
npm run cypress
```

## Features
- Single Page Application design (SPA)
- Use of React's hooks and custom hooks
- Error handling on invalid user input

## Features to be Added
- Using Reducers
- Using WebSockets
- Deployment with Heroku
- Continuous Pipeline using CircleCI and Netlify

