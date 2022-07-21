# <a id="top">Skip to content
- [01_Learning_github](#01)
- [02_Learning_css_html](#02)
- [03_Learning_python](#03)
- [04_Learning_react](#04)
- [05_Learning_with_David_Choi](#05)
- [06_Learning_create-reactapp](#06)
- [07_Learning_javascript](#07)

[back to top](#top)

# <a id="01"></a>Learning_01_github

## GIT and Github

This repository consists of my learning the basics of GIT and Github essentials such as repositories, branches, commits, merge conflicts, collaboration, and pull requests. It also includes exercises I created to practice my learning. 

## How to get started
clone the repository https://github.com/ejb3ck3tt/Learning_01_github.git


## Basic commands
**git init** initializes a brand new Git repository and begins tracking an existing directory.

**git clone** creates a local copy of a project that already exists remotely.

**git add** stages a change. Git tracks changes to a developer's codebase, but it's necessary to stage and take a snapshot of the changes to include them in the project's history.

**git commit** saves the snapshot to the project history and completes the change-tracking process.

**git status** shows the status of changes as untracked, modified, or staged.

**git branch** shows the branches being worked on locally.

**git merge** merges lines of development together. This command is typically used to combine changes made on two distinct branches.

**git pull** updates the local line of development with updates from its remote counterpart.

**git push** updates the remote repository with any commits made locally to a branch.

## Helpful reference:
https://docs.github.com/en/get-started/using-git/about-git

[back to top](#top)

# <a id="02"></a>Learning_02_CSSHTML
Learning the Fundamentals of CSS and HTML by creating a simple projects and practice environments. 

## Description
This repository consist of different projects, tutorials, and exercises I used and created for my skills development. 

## Dependencies
<ul>
 <li>Lightbox https://lokeshdhakar.com/projects/lightbox2/</li>
 <li>JQuery https://code.jquery.com/</li>
 <li>Font Awesome https://cdnjs.com/libraries/font-awesome</li>
 <li>JavaScript</li>
 <li>Node JS https://nodejs.org/en/ </li>
</ul>

## VSCode Extensions
<ul>
 <li>Live Sass Compiler</li>
 <li>Live Server</li>
 <li>Prettier</li>
</ul>

## Contents
No.| Project Title |
--- | --- |
 | 01 | Edge Ledger |
 | 02 | Targeted Selector Exercise |
 | 03 | Box and Text Shadows |
 | 04 | Variables |
 | 05 | Keyframes |
 | 06 | CSS Transitions |
 | 07 | Transform |
 | 08 | Presentation mini project|
 | 09 | Hamburger menu mini project |
 | 10 | Grid |
 | 11 | News Grid mini project | 
 | 12 | Sass setup and basic use exercise |
 | 13 | Sass Portfolio Website project |
 

## How to run the program
* copy the repository link at https://github.com/ejb3ck3tt/Learning_02_CSSHTML
* on your terminal, go to the folder where you want to clone the repository and type the command below
```
git clone https://github.com/ejb3ck3tt/Learning_02_CSSHTML.git
```
* open your vsCode and open the folder (don't forget to cd on the folder on your terminal)


### 01 Edge Ledger Project
* Creating Header HTML & Navbar Styles
* Adding Hero Section & Overlay
* Adding Icons & Solutions sections
* Adding Cases & Blog sections
* Completing the homepage section
* Adding responsive media queries
* Adding inner pages
* Adding navbar & lightbox effects
* Adding favicon

### 02 Targeted Selector Exercise
Exercises on how to use targeted selector and attributes.
* Child selector
* By attributes
* By types
* nth-child
* Before and after Pseudo Selectors

### 03 Box and Text Shadow
Exercises on how to implement box and text shadows. 

### 04 Variables
Exercises on how to use and re-use variables.

### 05 Keyframes
Exercises on how to use keyframes and animation properties
* Animation-name
* Animation-duration
* Animation-iteration-count
* Animation-fill-mode
* Animation-delay
* Animation-direction
* Animation-timing function
* Using @keyframes

### 06 CSS Transitions
Exercises on how to use CSS transitions

### 07 Transform
Exercises on how to use transform with transition

### 08 Presentation mini project
Mini project using transition, keyframes and transform with scroll effect using JQuery

### 09 Hamburger Menu mini project
How to create hamburger menu with animation using only CSS

### 10 Grid
* Grid columns
* Grid rows
* Grid span
* Minmax
* Grid Areas
* Grid media queries

### 11 News Grid mini project
A blog news website focusing on using grid

### 12 Sass setup and basic use exercise
- Download node js https://nodejs.org/en/
- Open VS code and cd inside the folder you want to use.
- To check if node has been installed correctly, on terminal, type node —version

Installation using npm
On terminal, type
> npm init -y
> npm install node-sass
Once installed, go to package json file:
Under: 
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
Replace it with:
```
"scripts": {
    "sass": "node-sass -w scss/ -o dist/css/ --recursive"
  },
```
- Create a folder named: scss
- Under scss folder, create a new file named main.scss
- Create another folder named: dist (where compiled css will be saved)

To run sass
> npm run sass

#### How to change path for Sass Live Compiler
To change the path for Sass (Live Sass Compiler)

In VS Code, go to “Code > Preferences > Settings > User > Extensions > Edit in settings.json” for change the global settings.
Copy and paste the below code:
```
{
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "./dist/css"
        },
        {
            "extensionName": ".min.css",
            "format": "compressed",
            "savePath": "./dist/css"
        }
    ],
    "liveSassCompile.settings.excludeList": [
        "**/node_modules/**",
        ".vscode/**"
    ],
    "liveSassCompile.settings.generateMap": false,
    //autoprefix, will auto add perfix like -webkit- -moz-..
    "liveSassCompile.settings.autoprefix": [
        "> 1%",
        "last 2 versions"
    ]
}
```
## 13 Sass Portfolio Website project
A mini portfolio website project using sass.

[back to top](#top)

# <a id="03"></a>Learning_03_python
Python uni projects, exercises, and practice collection

# How to run the project
- Download VSCode - https://code.visualstudio.com/
- Install VSCode python extension
- Install python 3 (recommended) - www.python.org/
  <p>If you are using MacOS, it is recommended to install python3 via homebrew - https://brew.sh/</p>
  <p>In MacOS, ensure the location of your VSCode is included in your PATH environment variable</p>
  - Launch VSCode
  - On your command palette (CMD + Shift + p) then search for "install code command in PATH"
  - Restart your terminal to use the new path
- Install a python interpreter, it can be (cPython, Iron python, jython, pypy, pythonNet, stackless python)

# How to run REPL on VSCode
<p>REPL stands for Read Evaluate Print Loop. It allows you to test out your code and run commands easily</p>
  - Activate command palette (CMD + Shift + p)
  - Find and select "Start REPL"

# How to check your python version
<p>On your terminal type:</p>
  <code>python3 --version</code>

# How to check your current interpreter
<p>You can use python or REPL to check your current interpreter</p>
  <code>import sys</code>
  <code>print(sys.version)</code>

# Execute your code by:
  <p>typing:
  <code>python filename.py</code>
  or by simply clicking the play button on top right corner of your VSCode.</p>

# Table of contents

📁 Bus Problem
- bus.py
  <p>Caculate how many teams can be taken to the tournament</p>
- hirebus.py
  <p>calculate the number of big buses that should be hired</p>
  
📁 Marks
- marks.py
  <p>Write a program that asks the user for a number of marks, and prints the grade awarded.</p>

📁 Numbers
- booking.py
  <p>Write a program that the box office can use to make sure only 100 seats are sold</p>
- countEvens.py
  <p>Program that reads a whole number until a negative number is entered and prints the number of
  even numbers that were entered</p>
- isqrt.py
  <p>Write a function that computes the integer square root of its argument</p>
- minmax.py
  <p>A function that given a list, returns both the minimum and maximum values in the list.</p>
- median.py
  <p>A program that allows the user to enter numbers until a blank line is entered instead of number, and then prints the median</p>

📁 String
- longest.py
  <p>prints the longest string that was entered</p>
- nodigits.py
  <p>A function that returns True if and only if its string argument contains no digits</p>
- sortlist.py
  <p>prints all of the strings sorted into ascending order.</p>
- palindrome.py
  <p>A function that accepts a string as its argument and returns True if and only if the string is a palindrome.</p>

📁 Voting
- candidates.py
  <p>a program that inputs the numbers of votes for each candidate in the first election and declares its result, either: • the name of the outright winner, or • the names of the two or three candidates to be voted on in the next round of voting.</p>

📁 Wage
- salary.py
  <p>A program that calculate the wages plus bonus for a salesperson in a week.</p>

📁 Loops
- loops.py
  <p>Understand loops and count execution with range</p>

📁 Grid
- xo.py
  <p>Create rows and columns with XO</p>

📁 ReadFiles
  <p>Different ways on how to load and read files</p>

[back to top](#top)

# <a id="04"></a>Learning_04_React
Learning the Fundamentals of React ts

Additional docs on how to clone a repository [How to clone a repository](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone)


**Create a new repository on the command line**
echo "# Learning_04_React" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/ejb3ck3tt/Learning_04_React.git
- git push -u origin main

**or push an existing repository from the command line**
- git remote add origin https://github.com/ejb3ck3tt/Learning_04_React.git
- git branch -M main
- git push -u origin main

**Contents**
- <strong>App</strong>
<em>Learning and understanding classes, events, props, refs, and state.</em>
- <strong>Redux-ts</strong>
<em>Learning and understanding how redux works, structure, and consuming data via API</em>
[back to top](#top)

# <a id="05"></a>Learning_05_ReactTs_with_DavidChoi
- interface and static member
[back to top](#top)

# <a id="06" ></a>Learning_06_Creating_ReactApp
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# <a id="07" ></a>Learning_06_JavaScript
- Learning and practice

[back to top](#top)