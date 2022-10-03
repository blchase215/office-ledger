const path = require('path');
const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');

// External functions
const { printLogo } = require('./utils/helpers');

const app = express();
app.use(express.urlencoded({ extended: false }));



printLogo();