const inquirer = require('inquirer')
const fs = require('fs')
const HTML = require('./src/generateHTML')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const employeeQuestions = [
    {
        type: 'input',
        message: 'Pleasee enter employee name: ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Pleasee enter employee id: ',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Pleasee enter employee email: ',
        name: 'email',
    },
]
const anotherEmployeeQuestion = [
    {
        type: 'list',
        message: 'Would you like to add another employee? Select from the following: ',
        name: 'nextEmployee',
        choices: [
            'Intern',
            'Engineer',
            'No more employees (end program)'
        ]
    }
]

const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter manager office number: ',
        name: 'officeNumber'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: 'Please enter intern school name: ',
        name: 'school'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'Please enter engineer gitHub username: ',
        name: 'gitHub'
    }
]

function getEmployeeInfo(role = 'manager') {
    if (role === 'no more employees (end program)') {
        fs.appendFile('./dist/team.html', `\n${HTML.generateBottomHTML()}`, (err) => {})
        return
    }
    if (role === 'manager') {
        //TODO: generate top html
        fs.writeFile('./dist/team.html', HTML.generateTopHTML(), (err) => {})
        inquirer
            .prompt([].concat(employeeQuestions, managerQuestions, anotherEmployeeQuestion))
            .then(function (response) {
                const  { name, id, email, officeNumber } = response
                const newEmployee = new Manager(name, id, email, officeNumber)
                fs.appendFile('./dist/team.html', `\n${HTML.generateManagerHTML(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.officeNumber)}`, (err) => {})
                return response.nextEmployee
            })
            .then(function (nextEmployee) {
                getEmployeeInfo(nextEmployee.toLowerCase())
            })
    }
    if (role === 'engineer') {
        inquirer
            .prompt([].concat(employeeQuestions, engineerQuestions, anotherEmployeeQuestion))
            .then(function (response) {
                const  { name, id, email, gitHub } = response
                const newEmployee = new Engineer(name, id, email, gitHub)
                fs.appendFile('./dist/team.html', `\n${HTML.generateEngineerHTML(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.gitHub)}`, (err) => {})
                return response.nextEmployee
            })
            .then(function (nextEmployee) {
                getEmployeeInfo(nextEmployee.toLowerCase())
            })
    }
    if (role === 'intern') {
        inquirer
            .prompt([].concat(employeeQuestions, internQuestions, anotherEmployeeQuestion))
            .then(function (response) {
                const  { name, id, email, school } = response
                const newEmployee = new Intern(name, id, email, school)
                fs.appendFile('./dist/team.html', `\n${HTML.generateInternHTML(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.school)}`, (err) => {})
                return response.nextEmployee
            })
            .then(function (nextEmployee) {
                getEmployeeInfo(nextEmployee.toLowerCase())
            })
    }
}
function init() {
    console.log('Please enter Manager info first')
    getEmployeeInfo()
}
init()