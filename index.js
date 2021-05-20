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
    if (role === 'No more employees (end program)') {
        return
    }
    if (role === 'manager') {
        inquirer
            .prompt([].concat(employeeQuestions, managerQuestions, anotherEmployeeQuestion))
            .then(function (response) {
                console.log(response);
                const  { name, id, email, officeNumber } = response
                const newEmployee = new Manager(name, id, email, officeNumber)
                console.log('newEmployee =>> ', newEmployee)
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
                console.log(response)
                const  { name, id, email, gitHub } = response
                const newEmployee = new Engineer(name, id, email, gitHub)
                console.log('newEmployee =>> ', newEmployee)
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
                console.log(response)
                const  { name, id, email, school } = response
                const newEmployee = new Intern(name, id, email, school)
                console.log('newEmployee =>> ', newEmployee)
                return response.nextEmployee
            })
            .then(function (nextEmployee) {
                getEmployeeInfo(nextEmployee.toLowerCase())
            })
    }
}
function init() {
    getEmployeeInfo()

}
init()