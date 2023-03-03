// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license !== 'no license') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return ' ';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== 'no license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return ' ';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'no license') {
    return `## [License](#table-of-contents) The following license covers the application: ${renderLicenseLink(license)}`;
  } else {
    return ' ';
  }
}

function renderLicenseQ(license) {
  if (license !==  'no license') {
    return `[License](#license)`;
  } else {
    return ' ';
  }
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  [Descrition](#description)
  
  [Installation](#installation)

  [Usage](#usage)
  
${renderLicenseQ(data.license)}

[Tests](#tests)

## [Description](#table-of-contents)

${data.info}

## [Installation](#table-of-contents)

${data.installation}

## [Usage](#table-of-contents)

${data.usage}

${renderLicenseSection(data.license)}

## [Tests](#table-of-contents)

${data.test}

`;

}

module.exports = generateMarkdown;
