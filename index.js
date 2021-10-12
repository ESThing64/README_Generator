// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
       {type: 'input', message: "Please write the name of your file", name: "file"},
       {type: 'list', message: "What file format do you want for your readme?", name: "fileType", choices: [".txt", ".md"]},
       {type: 'input', message: questions[0], name: ""},
       {type: 'input', message: questions[1], name: ""},
       {type: 'input', message: questions[2], name: ""},
       {type: 'input', message: questions[3], name: ""},
       {type: 'input', message: questions[4], name: ""},
       {type: 'input', message: questions[5], name: ""},
       {type: 'input', message: questions[6], name: ""}

    ])
    .then((answers) => {
        console.log("heyyyyy", answers.file)
        writeToFile(answers.file, "test")
        // writeToFile()
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

// TODO: Create an array of questions for user input
const questions = ["Please enter the title of your project.", "Provide a description of your project.", "Installation: How do you install your application?", "Instructions", "Usage: Provide examples of the application being used.", "Contribution Guidelines", "Testing instructions"];

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