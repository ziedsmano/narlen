import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <LanguageProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </LanguageProvider>
);
