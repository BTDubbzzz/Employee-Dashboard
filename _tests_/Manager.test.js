const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should create a new object from Manager class', () => {
        const testManager = new Manager('myname', 10, 'test@mail.com', '333')
        expect(testManager).toEqual({
            name: 'myname',
            id: 10,
            email: 'test@mail.com',
            officeNumber: '333'
        })
    })

    it('should return Manager office number', () => {
        const testManager = new Manager('myname', 10, 'test@mail.com', '333')
        expect(testManager.getOfficeNumber()).toEqual('333');
    })
    it('should return Manager role', () => {
        const testManager = new Manager('myname', 10, 'test@mail.com', '333')
        expect(testManager.getRole()).toEqual('Manager');
    })
})