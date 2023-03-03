// packages needed for this application

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

const fs = require ('fs');

//an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to name the title of your project?',
        validate: q1input => {
            if (q1input) {
                return true;
            } else {
                console.log('Please try entering your title again.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'GitUsername',
        message: 'Please provide your GitHub username',
        validate: q2input => {
            if (q2input) {
                return true;
            } else {
                console.log('Please try entering your GitHub username again.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'info',
        message: 'Describe your project and what goal it is trying to achieve',
        validate: q3input => {
            if (q3input) {
                return true;
            } else {
                console.log('Please provide information about your project.');
                return false;
            }
        }
    
    },

    {

        type: 'input',
        name: 'installation',
        message: 'Describe steps on how to install your project',
        validate: q4input => {
            if (q4input) {
                return true;
            } else {
                console.log('Please provide information about the installation regarding your project.');
                return false;
            }
        }
    
    },
 
    {

        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how your project will be utilized',
        validate: q5input => {
            if (q5input) {
                return true;
            } else {
                console.log('Please provide information about the steps on how to use your project.');
                return false;
            }
        }
    
    },
 
    
    {

        type: 'list',
        name: 'license',
        message: 'Please select a license to use for your project, if no license is needed, select no license',
        choices: ['MIT', 'Apache', 'no license', 'agpl']
    },

    {

        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to test the project',
        validate: q6input => {
            if (q6input) {
                return true;
            } else {
                console.log('Please provide information on how to test the project.');
                return false;
            }
        }
    
    },
];

//  function to write README file
function writeToFile(fileName, data) {}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./infowriting/created-readme.md', fileContent, err => {
            
            if (err) {
                reject(err);
                return;
            }
            
            resolve ({
                ok: true,
                message: 'File has been created!'
            });
        }
        );
    });
};

// function to initialize app
function init() {

    return inquirer.prompt(questions)
    .then (readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()

.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})

.then (pagemd => {
    return writeFile(pagemd);
})

.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})

.catch(err => {
    console.log(err);
})
