import React from "react"
import "../stylesheets/footer.css"
import { footer, queensPrinter } from "../localized_content"

const Footer = ({ lang }) => (
  <footer className="footer footer--default">
    <div className="ontario-row">
      <div className="ontario-columns ontario-small-12">
        <ul className="footer__links-container footer__links-container--inline">
          {footer &&
            footer[lang].map((item, index) => (
              <li key={index}>
                <a href={item.link} className="footer__link" target="_blank" rel="noopener">
                  {item.text} <span className="ontario-show-for-sr">This link will open in a new window.</span>
                </a>
              </li>
            ))}
        </ul>
        <div className="footer__copyright">
          <a className="footer__link" href={queensPrinter[lang].link} target="_blank" rel="noopener">
            {queensPrinter[lang].text}
            <span className="ontario-show-for-sr">This link will open in a new window.</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
