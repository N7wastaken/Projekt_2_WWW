<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TechForum</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./dist/styles/style.css" />
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TechForum</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" data-page="home" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-page="bootstrap" href="#">Bootstrap5</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-page="jquery" href="#">jQuery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-page="ajax" href="#">AJAX</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <div id="pageContent"></div>
      <div class="row mt-4">
        <div class="col-md-4">
          <h3>Frameworks List</h3>
          <div class="mb-3">
            <button id="loadJsonBtn" class="btn btn-primary">
              Load Frameworks
            </button>
          </div>
          <div id="frameworksContainer">
            <ul id="frameworksListFetch" class="list-group mb-3"></ul>
            <ul id="frameworksListXHR" class="list-group mb-3"></ul>
            <ul id="frameworksListJQ" class="list-group mb-3"></ul>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Text Content</h3>
          <button id="loadTxtBtn" class="btn btn-primary">Load Text</button>
          <div id="txtContent" class="mt-3 content-box"></div>
        </div>
        <div class="col-md-4">
          <h3>HTML Content</h3>
          <button id="loadHtmlBtn" class="btn btn-primary">Load HTML</button>
          <div id="htmlContent" class="mt-3 content-box"></div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <h3>Liczba odwiedzin strony:</h3>
      <p>
        <?php
        $filename = 'licznik.txt';
        if (!file_exists($filename)) {
            file_put_contents($filename, 0);
        }
        $licznik = (int)file_get_contents($filename);
        $licznik++;
        file_put_contents($filename, $licznik);
        echo $licznik;
        ?>
      </p>
    </div>

    <footer class="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2025 TechForum</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./dist/js/script.js"></script>
  </body>
</html>
