import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { config as firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
