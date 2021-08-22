const managerCard = (data) => {
    
};

const engineerCard = (data) => {
    console.log(data);
};

const internCard = (data) => {
    console.log(data);
};

// Exporting the HTML code to the writeFile function through the index
module.exports = teamData => {
    console.log(teamData);


    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
            <title></title>
        </head>

        <body class="bg-light">
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">My Team</a>
                    </div>
                </nav>
            </header>

            <main class="container-fluid row m-3">
                ${managerCard(teamData.manager)}
                ${engineerCard(teamData.engineer)}
                ${internCard(teamData.intern)}
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </main>
        </body>
    </html>
    `;
};