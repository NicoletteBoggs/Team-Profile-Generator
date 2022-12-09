const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Instance should take in a school argument", () => {
    const school = "UD";
    const employee = new Intern("Nicole", "ID", "email", school);
    expect(employee.school).toEqual(school);
  });
  it("Getschool should return school", () => {
    const school = "UD";
    const employee = new Intern("Nicole", "ID", "email", school);
    expect(employee.getschool()).toEqual(school);
  });
  it("Getrole should return Intern", () => {
    const role = "Intern";
    const employee = new Intern("Nicole", "ID", "email");
    expect(employee.getrole()).toEqual(role);
  });
});
