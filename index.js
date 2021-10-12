// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//add genmarkdown


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Please enter the file name of your read-me.",
        name: "file"
    },

    {
        type: 'list',
        message: "What file format do you want for your readme?",
        name: "fileType",
        choices: [".txt", ".md"]
    },

    {
        type: 'input',
        message: "Whats the title of your project?",
        name: "project"
    },

  

    {
        type: 'input',
        message: "Provide a description of your project.",
        name: "description"
    },

    {
        type: 'input',
        message: "Installation: How do you install your application?",
        name: "installation"
    },

    {
        type: 'input',
        message: "Instructions",
        name: "instructions"
    },

    {
        type: 'input',
        message: "Usage: Provide examples of the application being used.",
        name: "usage"
    },

    {
        type: 'input',
        message: "Contribution Guidelines",
        name: "contribution"
    },

    {
        type: 'input',
        message: "Testing instructions",
        name: "testing"
    }

];

inquirer
    .prompt(questions)
    .then((answers) => { generateMarkdown(answers)

        // writeToFile(`${answers.file}${answers.fileType}`, "")

        // fs.appendFile(`${answers.file}${answers.fileType}`,
        //     `# ${answers.project}\n ## Description\n ${answers.description}\n 
        //  `, () =>
        //     console.log("I think it worked")
        // );






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


// 