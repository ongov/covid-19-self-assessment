# COVID-19 Self Assessment Tool v3.0

**NOTE:** This tool is not intended to provide medical advice. If you have medical questions, consult your local health authority.

The tool takes the public through a series of questions to inform those who are concerned they may have contracted COVID-19. If the user's responses warrant them speaking to a medical professional, they are given the option of filling out their personal information and submitting it in order to get a callback. The tool is implemented using [Gatsby](https://www.gatsbyjs.org/), which is a React-based, GraphQL powered static site generator. Because Gatsby compiles into static HTML/CSS/JS, it enables blistering performance and simple deployments.

Current release: [v5.0.0](https://github.com/ongov/covid-19-self-assessment/releases/tag/v5.0.0)

Past releases:
- [v1.0.0](https://github.com/ongov/covid-19-self-assessment/releases/tag/v1.0.0)
- [v2.0.0](https://github.com/ongov/covid-19-self-assessment/releases/tag/v2.0.0)
- [v2.8.0](https://github.com/ongov/covid-19-self-assessment/releases/tag/v2.8.0)
- [v3.0.0](https://github.com/ongov/covid-19-self-assessment/releases/tag/v3.0.0)
- [v4.0.0](https://github.com/ongov/covid-19-self-assessment/releases/tag/v4.0.0)

Work on the tool is ongoing and due to its time-sensitive nature, we are prioritizing speed over everything else. It's not perfect but we are working around the clock to improve it for better useability and accuracy based on latest medical information we have available.

## RUNNING

**NOTE:** You need to have an up-to-date version of NodeJS installed to run this. I used 13.3.0 for development but any version higher than 12.0.0 should work. You will need to install `yarn` globally using `npm i -g yarn` before being able to run this project.

To run during development, simply use `yarn develop` command.

To build production version, use `yarn build`. Production build can be served locally using `yarn serve`.

The form used in this version of the tool submits the data to an API URL set via the `GATSBY_OAG_API_URL` environment variable. In development, this is set to http://localhost:3000/api/sat-data.
