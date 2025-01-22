// Page Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const page = this.getAttribute('data-page');
        loadPage(page);
    });
});

// Load page content
function loadPage(page) {
    fetch(`./dist/pages/${page}.html`)
        .then(response => response.text())
        .then(content => {
            document.getElementById('pageContent').innerHTML = content;
            if (page === 'jquery') {
                initJQueryEffects();
            }
        })
        .catch(error => console.error('Error loading page:', error));
}

// Fetch API implementation
async function fetchFrameworks() {
    try {
        const response = await fetch("./data/frameworks.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const frameworksList = document.getElementById("frameworksListFetch");
        frameworksList.innerHTML = '<h5>Fetch API Results:</h5>';
        
        data.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = item.name;
            listItem.className = 'list-group-item';
            frameworksList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// XMLHttpRequest implementation
function fetchFrameworksXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./data/frameworks.json", true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                const frameworksList = document.getElementById("frameworksListXHR");
                frameworksList.innerHTML = '<h5>XMLHttpRequest Results:</h5>';
                
                data.forEach((item) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = item.name;
                    listItem.className = 'list-group-item';
                    frameworksList.appendChild(listItem);
                });
            } catch (error) {
                console.error("JSON parsing error:", error);
            }
        }
    };

    xhr.onerror = function() {
        console.error("Request error");
    };

    xhr.send();
}

// jQuery AJAX implementation
function fetchFrameworksJQ() {
    $.ajax({
        url: "./data/frameworks.json",
        method: "GET",
        dataType: "json",
        success: function(data) {
            const frameworksList = $("#frameworksListJQ");
            frameworksList.html('<h5>jQuery AJAX Results:</h5>');
            
            data.forEach(function(item) {
                const listItem = $("<li></li>")
                    .text(item.name)
                    .addClass('list-group-item');
                frameworksList.append(listItem);
            });
        },
        error: function(xhr, status, error) {
            console.error("AJAX error:", error);
        }
    });
}

// jQuery animations and effects
function initJQueryEffects() {
    $('.slide-animation').click(function() {
        $(this).slideUp(500).slideDown(500);
    });

    $('.fade-animation').hover(
        function() { $(this).fadeOut(300).fadeIn(300); },
        function() { $(this).fadeIn(300); }
    );
}

// Event listeners for content loading
document.getElementById('loadJsonBtn').addEventListener('click', function() {
    fetchFrameworks();
    fetchFrameworksXHR();
    fetchFrameworksJQ();
});

document.getElementById('loadTxtBtn').addEventListener('click', function() {
    fetch('./data/dane.txt')
        .then(response => response.text())
        .then(content => {
            document.getElementById('txtContent').innerHTML = 
                `<div class="alert alert-info">${content}</div>`;
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('loadHtmlBtn').addEventListener('click', function() {
    $('#htmlContent').load('./dist/pages/sample.html');
});

// Load home page by default
loadPage('home');
