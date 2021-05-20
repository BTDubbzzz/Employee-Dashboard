const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create a new object from Intern class', () => {
        const testIntern = new Intern('myname', 10, 'test@mail.com', 'myschool')
        expect(testIntern).toEqual({
            name: 'myname',
            id: 10,
            email: 'test@mail.com',
            school: 'myschool'
        })
    })

    it('should return Intern school', () => {
        const testIntern = new Intern('myname', 10, 'test@mail.com', 'myschool')
        expect(testIntern.getSchool()).toEqual('myschool');
    })
    it('should return Intern role', () => {
        const testIntern = new Intern('myname', 10, 'test@mail.com', 'myschool')
        expect(testIntern.getRole()).toEqual('Intern');
    })
})