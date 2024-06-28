import React from "react";
import "./footer.css";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const [t] = useTranslation('common');

  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__copy">
          {/* Copyright &#169; 2024 by Noan Randon | All rigths reserved */}
          Copyright &#169; {t('footer.copyright')}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
