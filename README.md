# employee-directory

</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/phillipmerriman/budget-tracker?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/phillipmerriman/budget-tracker?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/phillipmerriman/budget-tracker?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/phillipmerriman/budget-tracker?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/phillipmerriman/budget-tracker?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/last-commit/phillipmerriman/budget-tracker?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/phillipmerriman/budget-tracker?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/phillipmerriman?style=social" alt="Followers" />  
</p>

## Description

Employee Directory using React. Renders a table of employess which the user can sort by name or id, and filter by the employees' favorite food.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)

## Installation

1. No installation necessary. Simply click on this link: 

<p align="center">
    <a href="https://phillipmerriman.github.io/employee-directory/" target="_blank"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p>

## Usage

### Screeshots

1. Main page

![Site](public/main.PNG)

2. The user clicked the "Sort by name" button

![Site](public/sorted-by-name.PNG)


3. The user filtered by favorite food

![Site](public/boogers.PNG)

### Snippets


1. Filter the employees by there favorite food:

```javascript

  handleInputChange = (event) => {
     const { name, value } = event.target;
     this.setState({[name]:value});
     const newFavFoods = this.state.original.filter((employee) => {
       return employee.favoriteFood.toLowerCase().includes(value.toLowerCase());
     });
     this.setState({employees: newFavFoods});
  } 
    
```


## Credits

### Author

- 💼 Phillip Merriman: [portfolio](https://phillipmerriman.github.io/portfolio/)
- :octocat: Github: [phillipmerriman](https://github.com/phillipmerriman)
- ![linkedin](public/icons8-linkedin-20.png) LinkedIn: [phillip-merriman-jr](https://www.linkedin.com/in/phillip-merriman-jr-62227485/)

### Built With

</br>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HTML" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blueviolet?style=for-the-badge" alt="Bootstrap" /></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/-React-blue?style=for-the-badge" alt="React" /></a>
    <a href="https://www.npmjs.com/package/axios"><img src="https://img.shields.io/badge/-Axios-blue?style=for-the-badge" alt="Axios" /></a>
</p>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
