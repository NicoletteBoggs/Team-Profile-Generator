const generateHTML = (teampool) => {
  const cardpool = [];

  const managercard = (employee) => {
    return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getrole()}</h5>
    <p class="card-text">Name: ${employee.getname()}</p>
    <p class="card-text">Office Number: ${employee.getofficenumber()}</p>
    <p class="card-text">Employee ID: ${employee.getid()}</p>
    <a href="mailto:${employee.getemail()}" class="btn btn-primary">E-mail: ${employee.getemail()}</a>
  </div>
</div>
    `;
  };
  // create card functions for engineer and intern

  for (var i = 0; i < teampool.length; i++) {
    if (teampool[i].getrole() === "Manager") {
      cardpool.push(managercard(teampool[i]));
    }
  }

  return cardpool.join("");
};

module.exports = (teampool) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
${generateHTML(teampool)}
  </div>
</div>
</body>
</html>`;
};
