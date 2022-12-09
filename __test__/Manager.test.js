const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Instance should take in an Office Number argument", () => {
    const officenumber = "333";
    const employee = new Manager("Nicole", "ID", "email", officenumber);
    expect(employee.officenumber).toEqual(officenumber);
  });
  it("Getofficenumber should return officenumber", () => {
    const officenumber = "333";
    const employee = new Manager("Nicole", "ID", "email", officenumber);
    expect(employee.getofficenumber()).toEqual(officenumber);
  });
  it("Getrole should return Manager", () => {
    const role = "Manager";
    const employee = new Manager("Nicole", "ID", "email");
    expect(employee.getrole()).toEqual(role);
  });
});
