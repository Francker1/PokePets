import React from 'react';
import ReactDOM from 'react-dom';
import { PetApp } from './PetApp';
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./config/firebase-config";

import "./index.css";


ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
    <PetApp />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
