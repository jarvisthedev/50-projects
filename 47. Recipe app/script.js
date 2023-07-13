`use strict`;

const form = document.querySelector('.search-area');
const searchInput = document.querySelector('.search-input');
const btn__search = document.querySelector('.btn--serch');

const section__single_Meal = document.querySelector('#section--individualMeal');
const section__Meals = document.querySelector('#section--meals');
const section__Categories = document.querySelector('#section--categories');

const individualMeal_details = document.querySelector(
  '.section--individualMeal .selected-meal-details'
);
const meals_list = document.querySelector('.section--meals .list-items');
const categories_list = document.querySelector(
  '.section--categories .list-items'
);

const mapping__individualMeal_details = async mealId => {
  try {
    const res = await fetch(mealId);
    if (!res.ok) {
      throw new Error('Failed to fetch meal details');
    }
    const data = await res.json();
    const [meal] = data.meals;

    const measureData = Object.keys(meal)
      .filter(key => key.includes('strMeasure') && meal[key])
      .map(key => meal[key])
      .filter(key => key !== ' ');

    const ingredientData = Object.keys(meal)
      .filter(key => key.includes('strIngre') && meal[key])
      .map(key => meal[key])
      .filter(key => key !== ' ');

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
                  ?.split(',')
                  .map(el => `<span>${el}</span>`)
                  .join('')
              : ''
          } </p>
          <div class="ingredients">
            <h4 class="tertiary-text--2">Ingredients</h4>
            <ol class="grid grid-columns--3">
            ${ingredientData.map(el => `<li>${el}</li>`).join('')}
            </ol>
          </div>
        </div>
        <div class="measurements">
          <h4 class="tertiary-text--2">Measure:</h4>
          <ul class="grid grid-columns--2">
          ${measureData.map(el => `<li>${el}</li>`).join('')}
          </ul>
        </div>
        <div class="instructions">
          <h4 class="tertiary-text--2">Instructions:</h4>
          <ul>
          ${meal.strInstructions
            ?.split('.')
            .filter(el => el !== '')
            .map(el => ` <li><p> ${el}</p></li>`)
            .join('')}
          </ul>
        </div>
      </div>
    `;

    individualMeal_details.innerHTML = ``;
    individualMeal_details.insertAdjacentHTML('afterbegin', html);
  } catch (error) {
    console.error('An error occurred while searching for meals:', error);
  }
};

const mapping_sectionMeals_list = async meal => {
  try {
    const res = await fetch(meal);
    if (!res.ok) throw new Error('Failed to search for meals');

    const data = await res.json();
    const { meals } = data;

    const html = `
        ${meals
          .map(
            el => `<li class="list-details">
                <div class="list-img" role="img" aria-label="meal-img">
                  <img id="${el.idMeal}" src="${el.strMealThumb}" alt="list img" />
                  <p class="strCategory">${el.strCategory}</p>
                </div>
                <p class="strArea">${el.strArea}</p>
                <p class="strMeal">${el.strMeal}</p>
            </li>`
          )
          .join('')}
        `;
    meals_list.innerHTML = ``;
    meals_list.insertAdjacentHTML(`afterbegin`, html);
  } catch (error) {
    console.error('An error occurred while searching for meals:', error);
    // Handle the error gracefully
  }
};

const mapping__categories_list = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const data = await res.json();
  const { categories } = data;

  const html = `
    ${categories
      .map(
        el => `<li class="list-details">
            <div class="list-img" role="img" aria-label="meal-img">
              <img src="${el.strCategoryThumb}" alt="list img" />
              <p class="strCategory">${el?.strCategory}</p>
            </div>
          </li>`
      )
      .join('')}
    `;
  categories_list.innerHTML = '';
  categories_list.insertAdjacentHTML('afterbegin', html);
};

categories_list.addEventListener('click', function (e) {
  const clicked = e.target;
  if (clicked.closest('.list-details')) {
    const parentEl = clicked.closest('.list-details');
    const filterLetter = parentEl
      .querySelector('.strCategory')
      .textContent.at(0);

    mapping_sectionMeals_list(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${filterLetter}`
    );
  }
  section__Meals.scrollIntoView({ behavior: 'smooth' });
});

meals_list.addEventListener('click', function (e) {
  const clicked = e.target;
  if (clicked.closest('.list-details')) {
    const parentEl = clicked.closest('.list-details');
    const imgId = parentEl.querySelector(`img`).id;
    mapping__individualMeal_details(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${imgId}`
    );
  }
  section__single_Meal.scrollIntoView({ behavior: 'smooth' });
});

mapping__individualMeal_details(
  'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
);
mapping_sectionMeals_list(
  `https://www.themealdb.com/api/json/v1/1/search.php?f=v`
);
mapping__categories_list();

btn__search.addEventListener('click', function (e) {
  e.preventDefault();
  const userInput = searchInput.value.trim();
  if (!userInput) return;

  searchInput.value = '';

  mapping__individualMeal_details(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
  );
  section__single_Meal.scrollIntoView({ behavior: 'smooth' });
});
