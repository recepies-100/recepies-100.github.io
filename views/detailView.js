import { html } from "@lit-html";
import page from "@page";
import { deleteReciepe, getReciepeById } from "../data/dataService.js";

const detailsTemp = (data, onDelete, onLike) => html`
  <section class="details">
    <div class="details-container">
      <img class="details-img" src=${data.imageUrl} alt="omlette-img" />
      <h2 id="details-title">${data.title}</h2>
      <div class="details-preparation">
        <h4 class="details-title__sec">Preparation Time</h4>
        <ul class="time-list">
          <li class="time-list__item">${data.prepTime}</li>
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
        <a href="/edit/${data.objectId}" id="edit-btn"> Edit Reciepe </a>
        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
          >Delete Reciepe</a
        >
        <a @click=${onLike} href="javascript:void(0)" id="like">Like</a>
      </div>
    </div>
  </section>
`;

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const data = await getReciepeById(id);

  ctx.render(detailsTemp(data, onDelete, onLike));

  async function onDelete() {
    const confirmation = confirm(
      "Are you sure you want to delete this reciep?"
    );

    if (!confirmation) {
      return;
    } else {
      await deleteReciepe(id);
    }

    page.redirect("/catalog");
  }

  async function onLike() {
    console.log('work');
    
  }
}
