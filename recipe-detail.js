const params = new URLSearchParams(window.location.search);
const recipeId = Number(params.get("id"));
const recipe = window.RECIPES.find((item) => item.id === recipeId);

const detailTitle = document.querySelector("#detail-title");
const detailContainer = document.querySelector("#recipe-detail");

if (!recipe) {
  detailTitle.textContent = "レシピが見つかりません";
  detailContainer.innerHTML = `
    <p class="empty-text">指定されたレシピが存在しません。TOPページから探してみてください。</p>
  `;
} else {
  document.title = `${recipe.title} | ぽかぽかレシピ帖`;
  detailTitle.textContent = recipe.title;

  detailContainer.innerHTML = `
    <img class="detail-image" src="${recipe.image}" alt="${recipe.title}" />
    <p class="detail-meta">${recipe.category} ・ 調理時間 ${recipe.cookTime}分 ・ ${recipe.servings}</p>
    <p class="detail-description">${recipe.description}</p>

    <section class="detail-section">
      <h2>材料</h2>
      <ul>
        ${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="detail-section">
      <h2>作り方</h2>
      <ol>
        ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </section>
  `;
}
