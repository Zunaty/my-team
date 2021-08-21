const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNum) {
        super();

        this.officeNum = officeNum;
    }

    getOfficeN() {
        return this.officeNum;
    }

    getRole() {
        return this.role = 'Manager';
    }
}

module.exports = Manager;