# PokePets!

This repo shows a list of pets and you can select or like-him!

## Getting Started with Create React App

First, you must install the project and dependencies, for that, clone this repo and run:

`npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

I have configure the connection to Firebase in **src/config** directory, but in professional enviroment, this config data must set in .env (production) file.

Also, at the start of the project I have created a json with data to start the database in Firebase.

<br>

### `npm run test`

Launches the test runner in the interactive watch mode.

In this project I have made two test suites that you can find in the **src/test** folder

<br>

### `npm run build`

Run this command to set the project in production. Don't forget change your environment variables to production. 

<br>

### Nexts steps:

- Get data in real time, when likes button is clicked. At the moment, updates this field in the database.
- Create a search field by name breed of dog
- Create pagination
