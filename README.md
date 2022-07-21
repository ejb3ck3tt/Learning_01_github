# Learning_01_github

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


# Learning_02_CSSHTML
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

