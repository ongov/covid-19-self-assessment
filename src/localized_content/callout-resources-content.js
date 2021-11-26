import React from "react"

const resourcesContent = {
  en: {
    heading: "More resources",
    resource_one: {
      title: "Download the COVID Alert mobile app",
      content:
        "Protect yourself and your community. Get a phone alert if you have been exposed to COVID-19 and let others know if you test positive, without sharing any personal information.",
      linkText: "Learn how it works",
      link: "https://www.ontario.ca/covidalert",
    },
    resource_two: {
      title: "Visiting a nursing or long-term care home?",
      content: (
        <>
          Some homes may need you to get a COVID-19 test before visiting. For long-term care homes, you{" "}
          <strong>do not</strong> need to get tested before an <strong>outdoor</strong> visit with a loved one.
        </>
      ),
      linkText: "Find a testing location near you to get a test",
      link: "https://covid-19.ontario.ca/assessment-centre-locations/",
    },
    resource_three: {
      title: "Did you get a COVID-19 test?",
      content: "Your result may be available online if you have a photo (green) health card.",
      linkText: "Check your test result",
      link: "https://covid19results.ehealthontario.ca:4443/",
    },
  },
  fr: {
    heading: "Plus de ressources",
    resource_one: {
      title: "Téléchargez l’application mobile Alerte COVID",
      content:
        "Protégez-vous et votre communauté. Recevez une alerte sur votre téléphone si vous avez possiblement été exposé à la COVID-19, et informez les autres si vous recevez un résultat de test positif, sans que vos renseignements personnels soient divulgués.",
      linkText: "Apprenez comment ça fonctionne",
      link: "http://www.ontario.ca/alertecovid",
    },
    resource_two: {
      title: "Allez-vous visiter une maison de soins infirmiers ou un foyer de soins de longue durée?",
      content: (
        <>
          Certains établissements peuvent exiger que vous passiez un test de dépistage de la COVID-19 avant votre
          visite. Pour les foyers de soins de longue durée, il n'est <strong>pas nécessaire</strong> de passer un test
          de dépistage avant une visite <strong>extérieure</strong> d'un proche.
        </>
      ),
      linkText: "Trouver un centre d’évaluation près de chez vous pour passer un test de dépistage",
      link: "https://covid-19.ontario.ca/emplacements-centres-devaluation/",
    },
    resource_three: {
      title: "Avez-vous passé un test de diagnostic de la COVID-19?",
      content: "Vous pouvez avoir accès à votre résultat si vous avez une carte Santé avec photo (verte).",
      linkText: "Consultez votre résultat en ligne",
      link: "https://covid19results.ehealthontario.ca:4443/",
    },
  },
}

export default resourcesContent
