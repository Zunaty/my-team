const Manager = require('../lib/Manager.js');

test('Testing to get manger role', () => {
    const manager = new Manager();
    
    expect(manager.getRole()).toBe('Manager');
});

test('getting manager office number', () => {
    const manager = new Manager(203);

    expect(manager.getOfficeN()).toBe(203);
});