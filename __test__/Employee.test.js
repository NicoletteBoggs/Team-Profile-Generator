const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Constructor should create object", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
  it("Instance should take in a name argument", () => {
    const name = "Nicole";
    const employee = new Employee(name);
    expect(employee.name).toEqual(name);
  });
  it("Instance should take in an ID argument", () => {
    const ID = "222";
    const employee = new Employee("Nicole", ID);
    expect(employee.id).toEqual(ID);
  });
  it("Instance should take in an Email argument", () => {
    const email = "222";
    const employee = new Employee("Nicole", "ID", email);
    expect(employee.email).toEqual(email);
  });
  it("Getname should return name", () => {
    const name = "Nicole";
    const employee = new Employee(name);
    expect(employee.getname()).toEqual(name);
  });
  it("Getid should return ID", () => {
    const ID = "222";
    const employee = new Employee("Nicole", ID);
    expect(employee.getid()).toEqual(ID);
  });
  it("Getemail should return email", () => {
    const email = "222";
    const employee = new Employee("Nicole", "ID", email);
    expect(employee.getemail()).toEqual(email);
  });
  it("Getrole should return Employee", () => {
    const role = "Employee";
    const employee = new Employee("Nicole", "ID", "email");
    expect(employee.getrole()).toEqual(role);
  });
});
