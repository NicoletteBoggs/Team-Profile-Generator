const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Instance should take in a Github argument", () => {
    const github = "NicoleBoggs";
    const employee = new Engineer("Nicole", "ID", "email", github);
    expect(employee.github).toEqual(github);
  });
  it("Getgithub should return github", () => {
    const github = "NicoleBoggs";
    const employee = new Engineer("Nicole", "ID", "email", github);
    expect(employee.getgithub()).toEqual(github);
  });
  it("Getrole should return Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("Nicole", "ID", "email");
    expect(employee.getrole()).toEqual(role);
  });
});
