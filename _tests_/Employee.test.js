const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should create a new object from Employee class', () => {
        const testEmployee = new Employee('myname', 10, 'test@mail.com')
        expect(testEmployee).toEqual({
            name: 'myname',
            id: 10,
            email: 'test@mail.com'
        })
    })

    it('should return employee name', () => {
        const testEmployee = new Employee('myname', 10, 'test@mail.com')
        expect(testEmployee.getName()).toEqual('myname');
    })
    it('should return employee id', () => {
        const testEmployee = new Employee('myname', 10, 'test@mail.com')
        expect(testEmployee.getID()).toEqual(10);
    })
    it('should return employee email', () => {
        const testEmployee = new Employee('myname', 10, 'test@mail.com')
        expect(testEmployee.getEmail()).toEqual('test@mail.com');
    })
    it('should return employee role', () => {
        const testEmployee = new Employee('myname', 10, 'test@mail.com')
        expect(testEmployee.getRole()).toEqual('Employee');
    })
})