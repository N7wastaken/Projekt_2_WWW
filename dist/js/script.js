async function fetchFrameworks() {
    try {
        const response = await fetch("http://localhost:5500/data/frameworks.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        
        const frameworksList = document.getElementById("frameworksListFetch");

        
        data.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = item.name; 
            frameworksList.appendChild(listItem); 
        });
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
    }
}

fetchFrameworks();


function fetchFrameworksXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:5500/data/frameworks.json", true);

  xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
          try {
              const data = JSON.parse(xhr.responseText); 
              console.log(data);

              
              const frameworksList = document.getElementById("frameworksListXHR");

              
              data.forEach((item) => {
                  const listItem = document.createElement("li");
                  listItem.textContent = item.name; 
                  frameworksList.appendChild(listItem); 
              });
          } catch (error) {
              console.error("Wystąpił błąd podczas parsowania JSON:", error);
          }
      } else {
          console.error(`HTTP error! status: ${xhr.status}`);
      }
  };

  xhr.onerror = function () {
      console.error("Wystąpił błąd podczas wykonania żądania.");
  };

  xhr.send(); 
}

fetchFrameworksXHR();

function fetchFrameworksJQ() {
  $.ajax({
      url: "http://localhost:5500/data/frameworks.json",
      method: "GET",
      dataType: "json",
      success: function (data) {
          console.log(data);

          
          data.forEach(function (item) {
              const listItem = $("<li></li>").text(item.name); 
              $("#frameworksListJQ").append(listItem); 
          });
      },
      error: function (xhr, status, error) {
          console.error("Wystąpił błąd podczas pobierania danych:", error);
      }
  });
}

fetchFrameworksJQ();

