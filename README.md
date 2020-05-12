# COVID-19 Self Assessment Tool v3.0

**NOTE:** This tool is not intended to provide medical advice. If you have medical questions, consult your local health authority.

The tool takes the public through a series of questions to inform those who are concerned they may have contracted COVID-19. If the user's responses warrant them speaking to a medical professional, they are given the option of filling out their personal information and submitting it in order to get a callback. The tool is implemented using [Gatsby](https://www.gatsbyjs.org/), which is a React-based, GraphQL powered static site generator. Because Gatsby compiles into static HTML/CSS/JS, it enables blistering performance and simple deployments.

Changelog:

- Revised symptom list to remove redundant and obsolete symptoms
- Added a form to collect an estimate of the symptom onset date from user
- Also added a form to collect an estimate the date of exposure to COVID-19 and to someone with respiratory symptoms
- Added a form to get the exact date of return to Canada (if in the last 14 days)
- Added a form where the user could fill in their contact information and request a callback from Ontario Health
- Resolved an issue with "skip to content" links on pages to improve accessibility
- Many small design and content tweaks

Work on the tool is ongoing and due to its time-sensitive nature, we are prioritizing speed over everything else. It's not perfect but we are working around the clock to improve it for better useability and accuracy based on latest medical information we have available.

## RUNNING

**NOTE:** You need to have an up-to-date version of NodeJS installed to run this. I used 13.3.0 for development but any version higher than 12.0.0 should work. You will need to install `yarn` globally using `npm i -g yarn` before being able to run this project.

To run during development, simply use `yarn develop` command.

To build production version, use `yarn build`. Production build can be served locally using `yarn serve`.

The form used in this version of the tool submits the data to an API URL set via the `GATSBY_OAG_API_URL` environment variable. In development, this is set to http://localhost:3000/api/sat-data.
