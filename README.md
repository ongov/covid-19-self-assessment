# COVID-19 Self Assessment Tool

**NOTE**: There is an updated version of this tool available [here](https://github.com/ongov/covid-19-self-assessment-v2.8).

**NOTE:** This tool is not intended to provide medical advice. If you have medical questions, consult your local health authority.

The tool takes the public through a series of questions to inform those who are concerned they may have contracted COVID-19. It's based on a modified version of the Alberta Health Services tool to which we have applied Ontario design system styling and made a number of functional changes. Those changes include but are not limited to:

- Changed logic and flow of the application to fit the message Ontario Health wanted to convey
- Changed markup to fit our design and to conform to HTML standards
- Applied Ontario Design System styling to everything
- Moved third party assets from CDN links to the static folder included with the app
- Added handling for browser back/forward buttons
- Added in-page anchors to aid with analytics
- Added and tested accessibility features allowing for screen readers and other assistive technologies to be used

Because the tool is comprised of static HTML/JS/CSS files, it can be hosted anywhere and cached in the CDN for optimum performance. We have verified compatibility with a range of desktop and mobile browsers. Internet Explorer 10 and higher and Edge (all versions) are supported in addition to more popular browsers.

## KNOWN ISSUES

- There is a bug in using back/forward buttons on Internet Explorer 10 and 11
- There is an issue with some screen readers with the skip to main content button

We are working on addressing these issues in the tool and will update the repo accordingly
