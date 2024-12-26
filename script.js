import { apiKey } from './api_keys.js';

const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".option_container");


// NG for Nigeria, US for United state
const country = "US";
const options = ["general", "entertainment", "health", "science", "sport", "technology"];

// Create card from data
const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `
      <div class="news-image-container">
        <img src="${item.urlToImage || "./newspaper.jpg"}" alt="news-Images" />
      </div>
      <div class="news-content"> 
        <div class="news-title">
          ${item.title}
        </div>
        <div class="news-description">
          ${item.description || item.content || ""}
        </div>
        <a href="${item.url}" target="_blank" class="view-button">Read More</a>
      </div>`;
    container.appendChild(card);
  }
};

// News API Call
const getNews = async () => {
  container.innerHTML = "";
  let requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;

  // Error Handling 
  try {
    let response = await fetch(requestURL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();

    if (data.articles && data.articles.length) {
      generateUI(data.articles);
    } else if (data.status === "error") {
      alert(`API Error: ${data.message}`); // Handle specific API errors
    } else {
      alert("No articles available for this category. Try another."); // Informative message
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    alert("Data Unavailable. Please try again later");
  }
};

// Category Selection
const selectCategory = (e, category) => {
  let option = document.querySelectorAll(".options");
  option.forEach((element) => {
    element.classList.remove("active");
  });
  let requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  e.target.classList.add("active");
  getNews();
}

// Options Button
const createOptions = () => {
  for (let i of options) {
    optionsContainer.innerHTML += `<button class="options ${i == "general" ? "active" : ""}" onclick="selectCategory(event, '${i}')">${i}</button>`
  }
}

const init = () => {
  optionsContainer.innerHTML = "";
  createOptions();
  getNews();
};

window.onload = init;