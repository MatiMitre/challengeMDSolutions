const key = "f53ebe50248f78e141ef6fedcafd3106";
const table = document.getElementById("table");

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = () => {
  let url = `http://api.mediastack.com/v1/news?access_key=${key}&keywords=clima&limit=8`;
  fetch(url)
    .then((data) => data.json())
    .then((res) => {
      printTbody(res);
    });
};

const printTbody = (res) => {
  for (let i = 0; i < res.data.length; i++) {
    table.innerHTML += `<tr>
    <td>${res.data[i].author}</td>
    <td>${res.data[i].title}</td>
    <td>${res.data[i].description}</td>
    <td>${res.data[i].country}</td>
</tr>`;
  }
  pares();
};

function pares() {
  $("td:even").css("background", "grey");
}

