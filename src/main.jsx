import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIeXvuFr1rJRdiPouVmTsSvxYbNjMOTC0",
  authDomain: "proyecto-1-da00c.firebaseapp.com",
  projectId: "proyecto-1-da00c",
  storageBucket: "proyecto-1-da00c.appspot.com",
  messagingSenderId: "829652098056",
  appId: "1:829652098056:web:8db0d787cb8dcd7dc045bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
