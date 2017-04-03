var chalk = require('chalk');
var clear = require('clear');
var CLI = require('clui');
var inquirer = require('inquirer');
var Spinner = CLI.Spinner;
var touch = require('touch');
var figlet = require('figlet');
var fs = require('fs');
var files = require('./lib/files');

// Clear Console
clear();

// Show Banner
console.log(
    chalk.yellow(
        figlet.textSync('Create Sketch Plugin', { horizontalLayout: 'full' })
    )
)