var Container = document.getElementById('Container');
fetch('opdracht1_bijlage.json')
   .then(response => response.json())
   .then(data => {
      Object.entries(data).forEach(([key, val]) => {
         Container.innerHTML += `${key}` + ": " + `${val}` + '<br>';
      })
   });