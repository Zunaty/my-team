const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const pageTemplate = require('./src/pageTemplate');
const writeFile = require('./src/genHTML')

const team = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter your managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers ID number?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter team managers ID number!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter team managers email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Team managers office number?',
            validate: officeNumInput => {
                if(officeNumInput) {
                    return true;
                } else {
                    console.log('Please enter team managers email!')
                    return false;
                }
            }
        }
    ])
    .then(data => {
        this.manager = new Manager(data.name, data.id, data.email, data.officeNum);
        this.manager.getRole();

        team.push(this.manager);

        console.log(team)
        return team;
    })
}

const promptTeam = () => {
    return inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'teamAdd',
            choices: ['Add Engineer', 'Add Intern', 'Done']
        }
    )
    .then(({ teamAdd }) => {
        if(teamAdd === 'Add Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your engineers name?',
                    validate: nameInput => {
                        if(nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your engineers name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your engineers ID number?',
                    validate: idInput => {
                        if(idInput) {
                            return true;
                        } else {
                            console.log('Please enter your engineers ID number!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your engineers email?',
                    validate: emailInput => {
                        if(emailInput) {
                            return true;
                        } else {
                            console.log('Please enter your engineers email!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your engineers github username?',
                    validate: githubInput => {
                        if(githubInput) {
                            return true;
                        } else {
                            console.log('Please enter your engineers github username!')
                            return false;
                        }
                    }
                }
            ])
            .then((data) => {
                this.engineer = new Engineer(data.name, data.id, data.email, data.github);
                this.engineer.getRole();

                team.push(this.engineer);

                return promptTeam();
            })
        } else if (teamAdd === 'Add Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your interns name?',
                    validate: nameInput => {
                        if(nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your interns name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your interns ID number?',
                    validate: idInput => {
                        if(idInput) {
                            return true;
                        } else {
                            console.log('Please enter your interns ID number!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your interns email?',
                    validate: emailInput => {
                        if(emailInput) {
                            return true;
                        } else {
                            console.log('Please enter your interns email!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is your interns school?',
                    validate: schoolInput => {
                        if(schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter your interns school!')
                            return false;
                        }
                    }
                }
            ])
            .then((data) => {
                this.intern = new Intern(data.name, data.id, data.email, data.school);
                this.intern.getRole();

                team.push(this.intern);

                return promptTeam();
            })
        } else if(teamAdd === 'Done') {
            console.log(team);
            return team;
        }
    })
}

promptManager()
    .then(promptTeam)
    .then(data => {
        return pageTemplate(data);
    })
    .then(htmlData => {
        return writeFile(htmlData);
    })