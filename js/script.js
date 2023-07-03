const icons = document.querySelectorAll(".icon");
const category = document.querySelectorAll(".category");
const score = document.querySelectorAll(".score");

fetch("./js/data.json").then((response) =>
  response.json().then((data) => {
    console.log(data);

    icons[0].src = data[0].icon;
    category[0].textContent = data[0].category;
    score[0].textContent = data[0].score;

    icons[1].src = data[1].icon;
    category[1].textContent = data[1].category;
    score[1].textContent = data[1].score;

    icons[2].src = data[2].icon;
    category[2].textContent = data[2].category;
    score[2].textContent = data[2].score;

    icons[3].src = data[3].icon;
    category[3].textContent = data[3].category;
    score[3].textContent = data[3].score;
  })
);
