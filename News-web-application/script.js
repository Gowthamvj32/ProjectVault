const API_KEY = "c7aeaedfda1a4d69b8f6837e61012e9c";
const url = "https://newsapi.org/v2/everything?q=";

async function fetchData(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  return data;
}
fetchData("all").then((data) => renderMain(data.articles));

//menu btn
let mobilemenu = document.querySelector(".mobile");
let menuBtn = document.querySelector(".menuBtn");
let menuBtnDisplay = true;

menuBtn.addEventListener("click", () => {
  mobilemenu.classList.toggle("hidden");
});

//render news
function renderMain(arr) {
  let mainHTML = "";
  for (let i = 0; i < 20; i++) {
    if (arr[i] && arr[i].urlToImage) {
      mainHTML += ` <div class="card">
                        <a href=${arr[i].url}>
                        <img src=${arr[i].urlToImage} lazy="loading" />
                        <h4>${arr[i].title}</h4>
                        <div class="publishbyDate">
                            <p>${arr[i].source.name}</p>
                            <span>•</span>
                            <p>${new Date(
                              arr[i].publishedAt
                            ).toLocaleDateString()}</p>
                        </div>
                        <div class="desc">
                           ${arr[i].description}
                        </div>
                        </a>
                     </div>
        `;
    }
  }

  document.querySelector("main").innerHTML = mainHTML;
}

const searchBtn = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtnMobile = document.getElementById("searchFormMobile");
const searchInputMobile = document.getElementById("searchInputMobile");

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(searchInput.value);

  const data = await fetchData(searchInput.value);
  renderMain(data.articles);
});
searchBtnMobile.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await fetchData(searchInputMobile.value);
  renderMain(data.articles);
});

async function Search(query) {
  const data = await fetchData(query);
  console.log(data);
  renderMain(data.articles);
}
