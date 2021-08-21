const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super();

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role = 'Intern';
    }
}

module.exports = Intern;