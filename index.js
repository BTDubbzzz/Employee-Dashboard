const inquirer = require('inquirer');
const fs = require('fs');
const HTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fileName = './dist/team.html';
const employeeQuestions = [
	{
		type: 'input',
		message: 'Please enter employee name: ',
		name: 'name',
	},
	{
		type: 'input',
		message: 'Please enter employee id: ',
		name: 'id',
	},
	{
		type: 'input',
		message: 'Please enter employee email: ',
		name: 'email',
	},
];
const anotherEmployeeQuestion = [
	{
		type: 'list',
		message:
			'Would you like to add another employee? Select from the following: ',
		name: 'nextEmployee',
		choices: ['Intern', 'Engineer', 'No more employees (end program)'],
	},
];
const managerQuestions = [
	{
		type: 'input',
		message: 'Please enter manager office number: ',
		name: 'officeNumber',
	},
];
const internQuestions = [
	{
		type: 'input',
		message: 'Please enter intern school name: ',
		name: 'school',
	},
];
const engineerQuestions = [
	{
		type: 'input',
		message: 'Please enter engineer gitHub username: ',
		name: 'gitHub',
	},
];
function getEmployeeInfo(role, fileType, questionsType) {
	inquirer
		.prompt([].concat(employeeQuestions, questionsType, anotherEmployeeQuestion))
		.then(function (response) {
			const { name, id, email } = response;
			const specialProperty = Object.keys(response)[3];
			newEmployee = new role(name, id, email, response[specialProperty]);
			fs.appendFile(
				fileName,
				`\n${fileType(
					newEmployee.name,
					newEmployee.id,
					newEmployee.email,
					newEmployee[specialProperty]
				)}`,
				(err) => {}
			);
			return response.nextEmployee;
		})
		.then(function (nextEmployee) {
			getEmployeeRole(nextEmployee.toLowerCase());
		});
}
function getEmployeeRole(role = 'manager') {
	if (role === 'no more employees (end program)') {
		fs.appendFile(fileName, `\n${HTML.generateBottomHTML()}`, (err) => {});
		return;
	}
	if (role === 'manager') {
		fs.writeFile(fileName, HTML.generateTopHTML(), (err) => {});
		getEmployeeInfo(Manager, HTML.generateManagerHTML, managerQuestions);
	}
	if (role === 'engineer') {
		getEmployeeInfo(Engineer, HTML.generateEngineerHTML, engineerQuestions);
	}
	if (role === 'intern') {
		getEmployeeInfo(Intern, HTML.generateInternHTML, internQuestions);
	}
}
function init() {
	console.log('Please enter Manager info first');
	getEmployeeRole();
}
init();
