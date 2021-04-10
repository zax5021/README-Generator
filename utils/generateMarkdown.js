

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   return `![${license} license](${renderLicenseLink(license)})`;
// }
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   return `https://img.shields.io/badge/license-${license}-blue`;
// }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let badge;
function renderLicenseSection(license) {
  let licenseText;
  switch (license) {
    case "MIT":
      badge = `![${license} license](https://img.shields.io/badge/license-MIT-blue)`
      licenseText = "The MIT License";
      break;
    case "Mozilla Public License 2.0":
      badge = `![${license} license](https://img.shields.io/badge/license-Mozilla Public License 2-blue)`
      licenseText = 'Mozilla Public License 2.0'
      break;
    case "Unlicensed":
      badge = `![${license} license](https://img.shields.io/badge/license-Unlicensed-blue)`
      licenseText = 'Product is Unlicensed'
      break;
    case "Apache2":
      badge = `![${license} license](https://img.shields.io/badge/license-Apache 2-blue)`
      licenseText = 'Apache License 2.0'
      break;
    case "Common Dev and Distr License":
      badge = `![${license} license](https://img.shields.io/badge/license-Common Dev and Distr License-blue)`
      licenseText = 'Common Development and Distribution License'
      break;
    case "Eclipse Public License v 2":
      badge = `![${license} license](https://img.shields.io/badge/license-Eclipse Public License v 2-blue)`
      licenseText = 'Eclipse Public License version 2.0'
      break;
    case "GNU(GPL)":
      badge = `![${license} license](https://img.shields.io/badge/license-GNU (GPL)-blue)`
      licenseText = 'GNU General Public License (GPL)'
      break;
  }
  return `## License
 ${licenseText}`;
}

function renderDescriptionSection(data){
  
  if (!data.projDescription) {
  return ""
  } else{
  return `## Description
  ${data.projDescription}
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(badge)
  renderLicenseSection(data.license)
  console.log(badge)
  return `# ${data.projTitle}
  -- ${data.devName}
  ${badge}

  ${renderDescriptionSection(data)}
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  
  ## Installation
  ${data.instInstructions}
  ## Usage
  ${data.usageInfo}
  ## Credits
  ${data.credits}
  ${renderLicenseSection(data.license)}

  ---
  
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.testInstructions}`
  ;
}


module.exports = generateMarkdown;
