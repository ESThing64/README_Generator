// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = ["Please enter the title of your project.", "Provide a description of your project.", "Installation: How do you install your application?", "Instructions", "Usage: Provide examples of the application being used.", "Contribution Guidelines", "Testing instructions"];

inquirer
    .prompt([
        { type: 'input', message: "Please write the name of your file", name: "file" },
        { type: 'list', message: "What file format do you want for your readme?", name: "fileType", choices: [".txt", ".md"] },
        { type: 'input', message: questions[0], name: "project" },
        { type: 'input', message: questions[1], name: "description" }
        // { type: 'input', message: questions[2], name: "2" },
        // { type: 'input', message: questions[3], name: "3" },
        // { type: 'input', message: questions[4], name: "4" },
        // { type: 'input', message: questions[5], name: "5" },
        // { type: 'input', message: questions[6], name: "6" }

    ])
    .then((answers) => {

        writeToFile(`${answers.file}${answers.fileType}`, "")

        fs.appendFile(`${answers.file}${answers.fileType}`,
         `## ${answers.project}\n ## Description\n ${answers.description}\n 
         `, () =>
            console.log("I think it worked")
        );






    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

}



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


//This will make a new file. Its called mynewfile3.txt and the content inside is "Hello content"
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


// I need to start a promt. Should I have it ask the name of the readme? I think yes

//Then need it to save had variblename.md