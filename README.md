# Test App

## Prerequisite

You need docker installed.

## Installation

Run the install.sh script to create the docker enviroment for the app.

## Usage

At the end of the installation a webpack dev server is launched so you can run the app on http://localhost:3000

The app is build with webpack so for running the dev server use:

```
  npm run dev
```

and for building the project use:

```
npm run build
```

which will create the dist folder with the project files inside.

## About the app

Its a single page aplication build with the help of Webpack and ES modules.

It contains a Feed and Athletes page.

The Feed page is build with simple JS, D3 for the menu and Video js.

The Athletes page is build with web components but is partially done because I ran out of time.

For styling Bootstrap or custom css is used (didnt really style the pages, just the bare minimum). 

### Libraries/Frameworks used

- D3.js
- Bootstrap
- Video.js

### Project structure

* src
  * assests (folder for icons)
  * js (folder for js files)
  * styles (folder for css files)
  * index.js (entry point for js)
  * template.html (entry point for html)
