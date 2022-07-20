import "./styles.css";
import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}
