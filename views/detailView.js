import { html } from "@lit-html";
import { getReciepeById } from "../data/dataService.js";


const detailsTemp = (data) => html `
    <section class="details">
    <div class="details-container">
      <img class="details-img" src=${data.imageUrl} alt="omlette-img">
      <h2 id="details-title">${data.title}</h2>
      <div class="details-preparation">
        <h4 class="details-title__sec">
          Preparation Time
        </h4>
        <ul class="time-list">
          <li class="time-list__item">
            Aproximately time 30min
          </li>
          <li class="time-list__item">
            Preparation 10min
          </li>
          <li class="time-list__item">
            Cooking 35min
          </li>
        </ul>
      </div>
      <div class="details-ingredients">
        <h2 id="details-title__sec">Ingrediens</h2>
        <ul class="ingredients-list">
          <li class="ingredients-list__item">3-4 eggs</li>
          <li class="ingredients-list__item">salz & pfeffer</li>
          <li class="ingredients-list__item">1 spoon butter or oil</li>
          <li class="ingredients-list__item">optional feelng </li>
        </ul>
      </div>
      <div class="details-instructions">
        <h2 id="details-title__sec">Instructions</h2>
        <ol class="instruction-list">
          <li class="instruction-list__item">Beat the eggs</li>
          <li class="instruction-list__item">Heat a pan</li>
          <li class="instruction-list__item">Cook the Omlette</li>
          <li class="instruction-list__item">Add fillings</li>
          <li class="instruction-list__item">Fold and serve</li>
          <li class="instruction-list__item">Enjoy</li>
        </ol>
      </div>
      <div class="details-btns">
        <button id="delete">Delete Reciepe</button>
        <button id="like">Like</button>
      </div>
    </div>
  </section>
`

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const data = await getReciepeById(id);


  ctx.render(detailsTemp(data))
}