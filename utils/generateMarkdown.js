

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const license = '## License'
  let liscenseBadge;

  if (answers.license == "MIT") {
    liscenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (answers.license == "MPL 2.0"){
    liscenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (answers.license == "GPL v2"){
    liscenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else {
    liscenseBadge = '';
  }
 
  return `
# ${answers.project}\n




## Table of Contents
* [Description]
* [Installation Instructions]
* [Instructions]
* [Usage]
* [Contribution]
* [Testing]


## Description\n ${answers.description}\n
## Installation Instructions\n ${answers.installation}
## Instructions\n ${answers.instructions}
## Usage\n ${answers.usage}
## Contribution\n ${answers.contribution}
## Testing\n ${answers.testing}


${license}
${liscenseBadge}

`;
}

module.exports = generateMarkdown;


