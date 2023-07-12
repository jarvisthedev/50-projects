`use strict`;

const sectionMealDetail = document.querySelector(
  '.section--meal-details .selected-meal-details'
);
const sectionMeals = document.querySelector('.section--meals .list-items');
const sectionCategories = document.querySelector(
  '.section--categories .list-items'
);

const mapping__sectionMealDetail = async () => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
  );
  const data = await res.json();
  const [meal] = data.meals;

  const measureData = [];
  const ingredientData = [];

  for (let key in meal)
    if (key.includes('strMeasure') && meal[key] !== null && meal[key] !== '')
      measureData.push(meal[key]);
    else if (key.includes('strIngre') && meal[key] !== null && meal[key] !== '')
      ingredientData.push(meal[key]);

  const html = `
    <div class="selected-meal" role="img" aria-label="meal-img">
          <img src="${meal.strMealThumb}" alt="list img" />
        </div>
        <div class="supporting-img-text">
          <h3 class="tertiary-text--1">${meal.strMeal}</h3>
          <p class="category">Category: <span>${meal.strCategory}</span></p>
          <p class="source">
            Source:
            <span
              >${meal.strYoutube}</span
            >
          </p>
          <p class="tags">Tags:${meal.strTags
            .split(',')
            .map(el => `<span>${el}</span>`)
            .join('')} </p>
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
            .split('.')
            .map(el => ` <li><p> ${el}</p></li>`)
            .join('')}
          </ul>
        </div>
      </div>
    `;

  sectionMealDetail.innerHTML = ``;
  sectionMealDetail.insertAdjacentHTML('afterbegin', html);
};

const mapping__sectionMeals = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=e`
  );
  const data = await res.json();
  const { meals } = data;

  const html = `
        ${meals
          .map(
            el => `<li class="list-details">
                <div class="list-img" role="img" aria-label="meal-img">
                  <img src="${el.strMealThumb}" alt="list img" />
                  <p class="strCategory">${el.strCategory}</p>
                </div>
                <p class="strArea">${el.strArea}</p>
                <p class="strMeal">${el.strMeal}</p>
            </li>`
          )
          .join('')}
        `;
  sectionMeals.innerHTML = ``;
  sectionMeals.insertAdjacentHTML(`afterbegin`, html);
};

const mapping__sectionCategories = async () => {
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
              <p class="strCategory">${el.strCategory}</p>
            </div>
          </li>`
      )
      .join('')}
    `;
  sectionCategories.innerHTML = '';
  sectionCategories.insertAdjacentHTML('afterbegin', html);
};

mapping__sectionMealDetail();
mapping__sectionMeals();
mapping__sectionCategories();
