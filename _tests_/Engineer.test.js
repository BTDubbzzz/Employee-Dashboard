const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create a new object from Engineer class', () => {
        const testEngineer = new Engineer('myname', 10, 'test@mail.com', 'githubname')
        expect(testEngineer).toEqual({
            name: 'myname',
            id: 10,
            email: 'test@mail.com',
            gitHub: 'githubname'
        })
    })

    it('should return Engineer GitHub', () => {
        const testEngineer = new Engineer('myname', 10, 'test@mail.com', 'githubname')
        expect(testEngineer.getGithub()).toEqual('githubname');
    })
    it('should return Engineer role', () => {
        const testEngineer = new Engineer('myname', 10, 'test@mail.com', 'githubname')
        expect(testEngineer.getRole()).toEqual('Engineer');
    })
})