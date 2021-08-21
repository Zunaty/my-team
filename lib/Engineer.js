const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(github) {
        super();

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role = 'Engineer';
    }
}

module.exports = Engineer;