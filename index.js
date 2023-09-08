import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/components/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);