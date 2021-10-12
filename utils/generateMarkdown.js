// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  // console.log("from GENMd",answers)
  console.log(answers.project)
  return `# ${answers.project}
  ## Description\n ${answers.description}\n



  

`;
}

module.exports = generateMarkdown;


// writeToFile(`${answers.file}${answers.fileType}`, "")

// fs.appendFile(`${answers.file}${answers.fileType}`,
//     `# ${answers.project}\n ## Description\n ${answers.description}\n 
//  `, () =>
//     console.log("I think it worked")
// );