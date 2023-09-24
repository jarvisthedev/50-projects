`use strict`;

const header = document.querySelector(".header");
const form = document.querySelector(".search-area");
const searchInput = document.querySelector(".search-input");
const btn__search = document.querySelector(".btn--search");
const navList = document.querySelector(".nav-list");

const section__single_Meal = document.querySelector(".section--individualMeal");
const section__Meals = document.querySelector(".section--meals");
const section__Categories = document.querySelector(".section--categories");
const section__hero = document.querySelector(".section--hero");

///////////////////////////////////////////////////////////
// Sticky navigation
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting) document.body.classList.remove("sticky");
    else document.body.classList.add("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(section__hero);

const mapping__individualMeal_details = async (mealId) => {
  try {
    const res = await fetch(mealId);
    if (!res.ok) throw new Error("Failed to fetch meal details");
    const data = await res.json();
    const [meal] = data.meals;

    const measureData = Object.keys(meal)
      .filter((key) => key.includes("strMeasure") && meal[key])
      .map((key) => meal[key])
      .filter((key) => key !== " ");

    const ingredientData = Object.keys(meal)
      .filter((key) => key.includes("strIngre") && meal[key])
      .map((key) => meal[key])
      .filter((key) => key !== " ");

    const html = `
      <div class="selected-meal" role="img" aria-label="meal-img">
        <img src="${meal.strMealThumb}" alt="list img" />
      </div>
      <div class="supporting-img-text">
        <h3 class="tertiary-text--1">${meal.strMeal}</h3>
        <p class="category">Category: <span>${meal.strCategory}</span></p>
        <p class="source">
          Source:
          <span>
            <a href="${meal.strYoutube}" target="_blank">${meal.strYoutube}
              </a>
          </span>
        </p>
        <p class="tags">Tags:${
          meal.strTags
            ? meal?.strTags
                ?.split(",")
                .map((el) => `<span>${el}</span>`)
                .join("")
            : ""
        } </p>
        <div class="ingredients">
          <h4 class="tertiary-text--2">Ingredients</h4>
          <ol class="grid grid-columns--3">
          ${ingredientData.map((el) => `<li>${el}</li>`).join("")}
          </ol>
        </div>
      </div>
      <div class="measurements">
        <h4 class="tertiary-text--2">Measure:</h4>
        <ul class="grid grid-columns--2">
        ${measureData.map((el) => `<li>${el}</li>`).join("")}
        </ul>
      </div>
      <div class="instructions">
        <h4 class="tertiary-text--2">Instructions:</h4>
        <ul>
        ${meal.strInstructions
          ?.split(".")
          .filter((el) => el !== "")
          .map((el) => ` <li><p> ${el}</p></li>`)
          .join("")}
        </ul>
      </div>
      </div>
    `;

    section__single_Meal.innerHTML = `
      <div class="container">
        <h2 class="secondary-text">Meal Details</h2>
        <div class="selected-meal-details meal-details grid grid-columns--2"></div>
      </div>
    `;

    const individualMeal_details = document.querySelector(".meal-details");
    individualMeal_details.insertAdjacentHTML("afterbegin", html);
  } catch (error) {
    console.error("An error occurred while searching for meals:", error);
  }
};

const mapping_sectionMeals_list = async (meal) => {
  try {
    const res = await fetch(meal);
    if (!res.ok) throw new Error("Failed to search for meals");
    const data = await res.json();
    const { meals } = data;

    const html = `
        ${meals
          .map(
            (el) => `
              <li class="list-details">
                <div class="list-img" role="img" aria-label="meal-img">
                  <img id="${el.idMeal}" src="${el.strMealThumb}" alt="list img" />
                  <p class="strCategory">${el.strCategory}</p>
                </div>
                <p class="strArea">${el.strArea}</p>
                <p class="strMeal">${el.strMeal}</p>
              </li>`
          )
          .join("")}
        `;
    section__Meals.innerHTML = `
      <div class="container">
        <h2 class="secondary-text">Meals</h2>
        <ul class="list-items grid grid-columns--3"></ul>
      </div>
    `;
    const meals_list = document.querySelector(".section--meals .list-items");
    meals_list.insertAdjacentHTML(`afterbegin`, html);
  } catch (error) {
    console.error("An error occurred while searching for meals:", error);
  }
};

const mapping__categories_list = async () => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    if (!res.ok) throw new Error("Failed to fetch meal categories");
    const data = await res.json();
    const { categories } = data;

    const html = `
    ${categories
      .map(
        (el) => `
          <li class="list-details">
            <div class="list-img" role="img" aria-label="meal-img">
              <img src="${el.strCategoryThumb}" alt="list img" />
              <p class="strCategory">${el?.strCategory}</p>
            </div>
          </li>`
      )
      .join("")}
    `;
    section__Categories.innerHTML = `
      <div class="container">
        <h2 class="secondary-text">Categories</h2>
        <ul class="categories_list list-items grid grid-columns--4"></ul>
      </div>`;

    const categories_list = document.querySelector(".categories_list");
    categories_list.insertAdjacentHTML("afterbegin", html);
  } catch (err) {
    console.error("An error occurred while fetching meal categories:", err);
  }
};

section__hero.addEventListener("click", function (e) {
  if (e.target.closest(".section--hero")) navList.classList.remove("visible");
});

section__Categories.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.closest(".list-details")) return;

  const parentEl = clicked.closest(".list-details");
  const filterLetter = parentEl.querySelector(".strCategory").textContent.at(0);
  section__Meals.scrollIntoView({ behavior: "smooth" });

  mapping_sectionMeals_list(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${filterLetter}`
  );
});

section__Meals.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.closest(".list-details")) return;

  const parentEl = clicked.closest(".list-details");
  const imgId = parentEl.querySelector(`img`).id;
  section__single_Meal.scrollIntoView({ behavior: "smooth" });

  mapping__individualMeal_details(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${imgId}`
  );
});

btn__search.addEventListener("click", function (e) {
  e.preventDefault();
  const userInput = searchInput.value.trim();
  if (!userInput) return;

  searchInput.value = "";
  section__single_Meal.scrollIntoView({ behavior: "smooth" });

  mapping__individualMeal_details(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
  );
});

header.addEventListener("click", function (e) {
  const clicked = e.target;

  navList.classList.remove("visible");
  if (clicked.closest(".btn--menu")) navList.classList.add("visible");

  if (clicked.classList.contains("nav-details")) {
    navList.classList.remove("visible");
    const filterLetter = clicked.textContent.at(0);
    section__Meals.scrollIntoView({ behavior: "smooth" });

    mapping_sectionMeals_list(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${filterLetter}`
    );
  }
});

const mappingAllApis = () => {
  mapping__individualMeal_details(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
  );
  mapping_sectionMeals_list(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=v`
  );
  mapping__categories_list();
};

mappingAllApis();

// HANDLING FORMS WITH NETLIFY
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      document.querySelector(".success-msg").classList.remove(".hiddden");
      alert("Submission successful");
    })
    .catch((error) => alert(error));
  document
    .querySelector(".mail-input")
    .querySelector(".subscribe-input").value = "";
};

document.querySelector(".mail-input").addEventListener("submit", handleSubmit);
