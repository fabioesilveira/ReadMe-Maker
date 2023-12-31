// Packages needed for this application

const inquirer = require("inquirer")
const fs = require("fs")

// Array of questions for user input

const questions = [
    {
        type:"input",
        message:"Enter title",
        name:"title"
    },
    
    {
        type:"input",
        message:"Enter description",
        name:"description"
    },
    {
        type:"input",
        message:"Installation instructions",
        name:"installation"
    },
    {
        type:"input",
        message:"Usage instructions",
        name:"usage"
    },
    {
        type:"list",
        message:"License",
        name:"license",
        choices:["Apache License 2.0","GNU General Public license v3.0","MIT License","Boost Software License 1.0","None"]
    },
    {
        type:"input",
        message:"Contributions",
        name:"contributing"
    },
    {
        type:"input",
        message:"Test instructions",
        name:"test"
    },
    
    ]

// Function to write README file

function writeToFile(fileName, data) {}

// Function to initialize app and Table of Contents

function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        fs.writeFileSync("./DIST/README.md",`
# ${answers.title}

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Test
${answers.test}

## Questions
https://github.com/fabioesilveira
fabio.eds@hotmail.com

        `)
    })
}

// Function call to initialize app

init();

