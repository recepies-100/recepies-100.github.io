import { html } from "@lit-html";
import { getAllRecepies } from "../data/dataService.js";

const catalogTemp = (data) => html`
  <section class="catalog">
    <h2 class="catalog-heading">All reciepes</h2>
    <div class="cards-container">${data.map((x) => cardTemp(x))}</div>
  </section>
`;

const cardTemp = (card) => html`
  <div class="card">
    <img src=${card.imageUrl} alt="taco-img" class="card-img" />
    <h2 class="card-title">${card.title}</h2>
    <div class="card-body">
      <!-- <div class="p card-gredients">
            <ul>
              <li>4eggs</li>
            </ul>
          </div> -->
      <p class="card-description">${card.description}</p>
      <div class="card-likes">
        <p class="likes-result">0 <span>likes</span></p>
        <p class="link-wrapper">
          <a href="/details/${card.objectId}" class="card-btn">view reciepe</a>
        </p>
      </div>
    </div>
  </div>
`;

export async function showCatalogView(ctx) {
  const data = await getAllRecepies();
  let [results] = Object.entries(data);

  ctx.render(catalogTemp(results[1]));
}
