// Intégration du nombre de téléchargements de Mineria grâce à l'API cfWidget
fetch("https://api.cfwidget.com/373274")
  .then(response => response.json())
  .then(data => {
    let downloads = data.downloads.total;
    document.querySelector("#download-count").textContent = downloads;
  })
  .catch(error => console.error(error));

// Screenshot Viewer
fetch("https://api.cfwidget.com/693961")
  .then(response => response.json())
  .then(data => {
    let downloads = data.downloads.total;
    document.querySelector("#sv-download-count").textContent = downloads;
  })
  .catch(error => console.error(error));

// avec l'api curse forge :
// const headers = {
//   'Accept':'application/json',
//   'x-api-key':'$2a$10$c.c7ufzl0eLs9patkUY0d.FHZFSaOLfzmLfi6H4Lk59du7rroNJOu'
// };

// fetch('https://api.curseforge.com/v1/mods/373274',
// {
//   method: 'GET',

//   headers: headers
// })
// .then(function(res) {
//     return res.json();
// }).then(function(body) {
//     const downloads = body.data.downloadCount
//     console.log(body)
//     document.querySelector("#sv-download-count").textContent = downloads;
// });
