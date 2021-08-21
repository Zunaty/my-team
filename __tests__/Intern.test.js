const Intern = require('../lib/Intern')

test('get school', () => {
    const intern = new Intern('blah school');

    expect(intern.getSchool()).toBe('blah school');
})

test('get intern role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
})