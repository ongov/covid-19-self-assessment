import React from "react"
import "../stylesheets/footer.css"
import { footer, queensPrinter } from "../localized_content"

const Footer = ({ lang }) => (
  <footer>
    <div className="ontario-grid-container">
      <div className="ontario-row ontario-row--collapse">
        <div className="ontario-small-12 ontario-columns">
          <ul className="ontario-footer__list ontario-list--inline">
            {footer &&
              footer[lang].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener">
                    {item.text} <span className="ontario-show-for-sr">This link will open in a new window.</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="ontario-row ontario-row--collapse">
        <div className="ontario-small-12 ontario-columns">
          <p className="ontario-footer__copyright">
            <small>
              <a href={queensPrinter[lang].link} target="_blank" rel="noopener">
                {queensPrinter[lang].text}
                <span className="ontario-show-for-sr">This link will open in a new window.</span>
              </a>
            </small>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
