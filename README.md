# CLI taskTracker

A simple task tracker application using you device's Command Line Interface (CLI) build with node and typescript

## Prerequisites
To install the CLI easily, you should use git to clone the repo (although you can just download the files manually in this case) and node package manager (npm) to install the other dependencies

## Installation
To install the CLI, cd to the directory where you want the code to be stored, then clone this repository with `git clone https://github.com/sidesbutgithub/cliTaskTracker` and move into the directory with `cd cliTaskTracker`. Then install the required dependencies with `npm install` and use `npm run build`to create the application. run `npm link` to make the application availble throughout all directories in your computer through the CLI.

```
git clone https://github.com/sidesbutgithub/cliTaskTracker
cd cliTaskTracker
npm install
npm run build
npm link
```

## Usage

### Add tasks
```
cliTaskTracker add <taskName> <taskDescription>
```
Creates a task of `<taskName>` and description `<taskDescription>` with status todo   
If `<taskDescription>` is not provided, description is set to `<taskName>` 

### Update tasks
```
cliTaskTracker update <taskName> <featureName> <featureValue>
```
Updates values of `<featureName>` of `<taskName>` to `<featureValue>`  
Creates new custom feature if `<taskName>` does not currently have feature of `<featureName>`

### Delete tasks
```
cliTaskTracker delete `<taskName>`
```

### List tasks
```
cliTaskTracker list
```
Lists all tasks(not in archive)

```
cliTaskTracker list archive
```
Lists all tasks in archive

```
cliTaskTracker list <featureName> <featureValue>
```
Lists all tasks(not in archive) with `<featureName>` of `<featureValue>`

```
cliTaksTracker list attributes
```
Lists all attributes of tasks(not in archive)

### Archive
```
cliTaskTracker archive <taskName>
```
Adds task of taskName to archive

```
cliTaskTracker unarchive <taskName>
```
Removes `<taskName>` from archive and adds it back to the full task list

### Clear
```
cliTaskTracker clear
```
Deletes all tasks (including archive)
```
cliTaskTracker clear archive
```
Deletes all tasks in archive

