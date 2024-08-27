import { html } from "@lit-html";
import page from "@page";
import { deleteReciepe, getReciepeById } from "../data/dataService.js";

const detailsTemp = (data, onDelete) => html`
  <section class="details">
    <div class="details-container">
      <img class="details-img" src=${data.imageUrl} alt="omlette-img" />
      <h2 id="details-title">${data.title}</h2>
      <div class="details-preparation">
        <h4 class="details-title__sec">Preparation Time</h4>
        <ul class="time-list">
          <li class="time-list__item">Aproximately time 30min</li>
          <li class="time-list__item">Preparation 10min</li>
          <li class="time-list__item">Cooking 35min</li>
        </ul>
      </div>
      <div class="details-ingredients">
        <h2 id="details-title__sec">Ingrediens</h2>
        <ul class="ingredients-list">
          <li class="ingredients-list__item">${data.ingrediance}</li>
        </ul>
      </div>
      <div class="details-instructions">
        <h2 id="details-title__sec">Instructions</h2>
        <ul class="instruction-list">
          <li class="instruction-list__item">${data.description}</li>
        </ul>
      </div>
      <div class="details-btns">
        <button @click=${onDelete} id="delete">Delete Reciepe</button>
        <button id="like">Like</button>
      </div>
    </div>
  </section>
`;

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const data = await getReciepeById(id);

  

  ctx.render(detailsTemp(data, onDelete));
  
  async function onDelete() {
    
    
     await deleteReciepe(id);
  
  
    page.redirect("/catalog");
  }
}