# COVID-19 Self Assessment Tool v2.8

**NOTE:** This tool is not intended to provide medical advice. If you have medical questions, consult your local health authority.

The tool takes the public through a series of questions to inform those who are concerned they may have contracted COVID-19. It's implemented using [Gatsby](https://www.gatsbyjs.org/), which is a React-based, GraphQL powered static site generator. Because Gatsby compiles into static HTML/CSS/JS, it enables blistering performance and simple deployments.

Compared to the first two versions of the tool, this version contains many improvements. These are the highlights of the improvements:

- Symptoms are consolidated into a single page and are now selected via checkboxes
- Each symptom carries a "weight" which is then combined into a symtpom score
- Most of the content has been separated from the markup and can be managed separately
- State management is improved and back/forward buttons work correctly and remember previous state
- Analytics is greatly improved by adding symptoms and symptom scores to the data layer for Google Tag Manager

Work on the tool is ongoing and due to its time-sensitive nature, we are prioritizing speed over everything else. It's not perfect but we are working around the clock to improve it for better useability and accuracy based on latest medical information we have available.

## RUNNING

**NOTE:** You need to have an up-to-date version of NodeJS installed to run this. I used 13.3.0 for development but any version higher than 12.0.0 should work. You will need to install `yarn` globally using `npm i -g yarn` before being able to run this project.

To run during development, simply use `yarn develop` command.

To build production version, use `yarn build`. Production build can be served locally using `yarn serve`.
