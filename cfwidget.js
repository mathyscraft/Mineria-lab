/*Intégration du nombre de 
  téléchargements grâce à l'API cfWidget*/

const xhr = new XMLHttpRequest();

xhr.open('GET', "https://api.cfwidget.com/373274");

xhr.onreadystatechange = function() { 

  if (xhr.readyState === 4) {

    const response = JSON.parse(xhr.responseText);
    let downloads = response.downloads.total;
    document.querySelector("#download-count").textContent = downloads;

  }

};

xhr.send();