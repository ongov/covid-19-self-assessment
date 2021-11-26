import React from "react"
import { resourcesContent } from "../localized_content"
import "../stylesheets/callouts.css"

const CalloutResources = ({ lang }) => {
  return (
    <>
      <div className="ontario-callout--grey ontario-margin-bottom-32-!">
        <h2 className="h3 ontario-margin-bottom-32-!">{resourcesContent[lang].heading}</h2>

        <h3 className="h5">{resourcesContent[lang].resource_one.title}</h3>
        <p>{resourcesContent[lang].resource_one.content}</p>
        <p><a href={resourcesContent[lang].resource_one.link} target="_blank" rel="noopener">{resourcesContent[lang].resource_one.linkText}</a></p>

        <h3 className="h5">{resourcesContent[lang].resource_two.title}</h3>
        <p>{resourcesContent[lang].resource_two.content}</p>
        <p><a href={resourcesContent[lang].resource_two.link} target="_blank" rel="noopener">{resourcesContent[lang].resource_two.linkText}</a></p>

        <h3 className="h5">{resourcesContent[lang].resource_three.title}</h3>
        <p>{resourcesContent[lang].resource_three.content}</p>
        <p><a href={resourcesContent[lang].resource_three.link} target="_blank" rel="noopener">{resourcesContent[lang].resource_three.linkText}</a></p>
      </div>
    </>
  )
}

export default CalloutResources