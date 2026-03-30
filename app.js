const searchInput = document.querySelector("#recipe-search");
const recipeGrid = document.querySelector("#recipe-grid");
const categoryList = document.querySelector("#category-list");
const resultCount = document.querySelector("#result-count");

let selectedCategory = "すべて";
let keyword = "";

function renderCategories() {
  const categories = ["すべて", ...window.CATEGORIES];

  categoryList.innerHTML = categories
    .map(
      (category) => `
      <button class="category-chip ${
        selectedCategory === category ? "is-active" : ""
      }" data-category="${category}">
        ${category}
      </button>
    `
    )
    .join("");

  categoryList.querySelectorAll(".category-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      selectedCategory = chip.dataset.category;
      renderCategories();
      renderRecipes();
    });
  });
}

function filterRecipes() {
  return window.RECIPES.filter((recipe) => {
    const inCategory =
      selectedCategory === "すべて" || recipe.category === selectedCategory;
    const inKeyword =
      keyword.length === 0 ||
      recipe.title.includes(keyword) ||
      recipe.category.includes(keyword) ||
      recipe.tags.some((tag) => tag.includes(keyword));

    return inCategory && inKeyword;
  });
}

function renderRecipes() {
  const filtered = filterRecipes();

  resultCount.textContent = `${filtered.length}件表示`;

  recipeGrid.innerHTML = filtered
    .map(
      (recipe) => `
      <article class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
        <div class="recipe-card__body">
          <p class="recipe-meta">${recipe.category} ・ ${recipe.cookTime}分</p>
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
          <a href="recipe.html?id=${recipe.id}" class="recipe-link">詳細を見る</a>
        </div>
      </article>
    `
    )
    .join("");

  if (filtered.length === 0) {
    recipeGrid.innerHTML =
      '<p class="empty-text">条件に合うレシピが見つかりませんでした。キーワードを変えてお試しください。</p>';
  }
}

searchInput.addEventListener("input", (event) => {
  keyword = event.target.value.trim();
  renderRecipes();
});

renderCategories();
renderRecipes();
