# CLI taskTracker

A simple task tracker application using you device's Command Line Interface (CLI) build with node and typescript

## Prerequisites
To install the CLI easily, you should use git to clone the repo (although you can just download the files manually in this case) and node package manager (npm) to install the other dependencies

## Installation
To install the CLI, cd to the directory where you want the code to be stored, then clone this repository with `git clone https://github.com/sidesbutgithub/cliTaskTracker` and move into the directory with `cd cliTaskTracker`. Then install the required dependencies with `npm install` and use `npm run build`to create the application. run `npm link` to make the application availble throughout all directories in your computer through the CLI.

```
git clone https://github.com/sidesbutgithub/cliTaskTracker
npm install
npm run build
npm link
```

## Usage

### Adding tasks
```
cliTaskTracker add <taskName> <taskDescription>
```
Note: You do not need to format the description in any special way, all remaining arguments after the taskname will be parsed as the description

### Updating tasks
```
cliTaskTracker update <featureName> <featureValue>
```

### Deleting tasks
```
cliTaskTracker delete <taskName>
```

### List all tasks
```
cliTaskTracker list
```
