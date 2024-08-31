import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
import { BrowserRouter } from 'react-router-dom';
import WorkDetails from './components/Portfolio/WorkDetails';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'fr',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        fr: {
            common: common_fr
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <Header />
        <Routes>
          <Route path="/" element={<App />}>
          </Route>
          <Route path="/project/:id" element={<WorkDetails />}>
          </Route>
        </Routes>
        <ScrollUp />
        <Footer/>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
