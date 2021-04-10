// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
let readmeParams = {};

const writeFileAsync = util.promisify(fs.writeFile);


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'devName',
            message: 'Please enter your name:',
        },
        {
            type: 'input',
            name: 'projTitle',
            message: 'What is your project called?',
        },
        {
            type: 'input',
            name: 'projDescription',
            message: 'Please write a short description of your project:',
        },
        {
            type: 'input',
            name: 'instInstructions',
            message: 'Provide any necessary instructions for your project:',
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'If there is any usage info you would like to provide, enter that here:',
        },
        {
            type: 'list',
            message: 'What license(s) are you using?',
            name: 'license',
            choices: ["Unlicensed", "Apache2", "GNU(GPL)", "MIT", "Mozilla Public License 2.0", "Common Dev and Distr License", "Eclipse Public License v 2"],
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'If there are any contribution guidelines, this is the place to enter:',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please enter any collaborators you worked with on your project',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'if you have any test instuctions, please enter them here:',
        }
    ])
}

const init = () => {
    promptUser()
        .then((answers) => readmeParams = answers)
        // .then (() => console.log(readmeParams))
        .then (()=> writeFileAsync('testREADME.md', generateMarkdown(readmeParams),(err) =>
           err ? console.error(err) : console.log('README generated!!!')))
}
init ();
// readmeParams = {
//     projTitle : 'Project',
//     projDescription:'the best description you could imagine!',
//     instInstructions: 'Here are some installation instructions',
//     usageInfo: 'All the Usage Info',
//     license: 'MIT',
//     contribution: 'no rules, anything you submit will be merged!',
//     credits: 'none yet, but soon the pull requests will be flowing',
//     testInstructions: 'good luck!',
// }

// const testGen = () => {
//     fs.writeFile('testREADME.md', generateMarkdown(readmeParams),(err) =>
//     err ? console.error(err) : console.log('README generated!!!'));
// }
// console.log(readmeParams);
// testGen();

