const Engineer = require('../lib/Engineer')

test('get github', () => {
    const engineer = new Engineer('blah');

    expect(engineer.getGithub()).toBe('blah');
})

test('get engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
})