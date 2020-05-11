import React from "react"
import "../stylesheets/footer.css"
import { footer } from "../localized_content"

const Footer = ({ lang }) => (
  <footer>
    <div className="ontario-grid-container">
      <div className="ontario-row ontario-row--collapse">
        <div className="ontario-small-12 ontario-columns">
          <ul className="ontario-footer__list ontario-list--inline">
            {footer &&
              footer[lang].map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="ontario-row ontario-row--collapse">
        <div className="ontario-small-12 ontario-columns">
          <p className="ontario-footer__copyright">
            <small>
              <a href="https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario">
                © Queen’s Printer for Ontario, 2012–20
              </a>
            </small>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
