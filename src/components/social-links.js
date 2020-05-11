import React from "react"
import { social } from "../localized_content"

const SocialLinks = ({ lang }) => {
  const ShareLink = ({ share }) => (
    <a target="_blank" rel="noopener noreferrer" href={social[lang].links[share]}>
      <span className="ontario-show-for-sr">{share}</span>
      <i className={`ontario-icon ontario-icon__${share}`}></i>
    </a>
  )

  return (
    <div className="ontario-row ontario-margin--bottom-double-half ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <h2 className="ontario-H2">{social[lang].title}</h2>
        <ul className="ontario-list--inline">
          <li>
            <ShareLink share="linkedin" />
          </li>
          <li>
            <ShareLink share="twitter" />
          </li>
          <li>
            <ShareLink share="facebook" />
          </li>
          <li>
            <ShareLink share="email" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SocialLinks
