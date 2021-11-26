import {buttonFindCentre} from "../localized_content";
import React from "react";

const ButtonFindCentre = ({lang}) => (
  <>
    <a
      href={buttonFindCentre[lang].linkPath}
      className="ontario-button ontario-button--primary"
      target="_blank"
      rel="noopener"
    >
      {buttonFindCentre[lang].title}
      <span className="ontario-show-for-sr">Link will open in a new window</span>
      <span className="ontario-icon__new-window"></span>
    </a>
  </>
)
export default ButtonFindCentre