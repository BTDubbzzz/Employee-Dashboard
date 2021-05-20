function generateTopHTML() {
	const topHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Team Profile</title>
      </head>
      <body>
        <header>
          <div id="flex-div">
            <h1>My Team</h1>
          </div>
        </header>
        <main>
          <div class="row">
            <div class="col-3"></div>
            <div class="row col-6">`;

	return topHTML;
}

function generateBottomHTML() {
	const bottomHTML = `        </div>
    <div class="col-3"></div>
  </div>
</main>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
  integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
  crossorigin="anonymous"
></script>
</body>
</html>`;

	return bottomHTML;
}

function generateManagerHTML(name, id, email, officeNumber) {
	const managerHTML = `<div class="col-4">
    <div class="card manager col h-100">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">Office Number: ${officeNumber}</li>
      </ul>
    </div>
  </div>`;
	return managerHTML;
}
function generateEngineerHTML(name, id, email, gitHub) {
	const engineerHTML = `<div class="col-4">
    <div class="card engineer col h-100">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">GitHub link: <a href="https://github.com/${gitHub}">${gitHub}</a></li>
      </ul>
    </div>
  </div>`;
	return engineerHTML;
}
function generateInternHTML(name, id, email, school) {
	const internHTML = `<div class="col-4">
    <div class="card intern col h-100">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
    </div>
  </div>`;
	return internHTML;
}

module.exports = {
	generateTopHTML,
	generateBottomHTML,
	generateManagerHTML,
	generateEngineerHTML,
	generateInternHTML,
};
