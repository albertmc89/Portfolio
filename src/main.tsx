import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "./styles.css";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
);
