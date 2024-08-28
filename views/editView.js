import { html } from "@lit-html";
import page from "@page";
import { getReciepeById, updateRecepi } from "../data/dataService.js";
import { createSubmitHandler } from "../middlewares/submithandler.js";

const editTemp = (postData, onEdit) => html`
  <section class="edit">
    <h1 class="edit-heading">Edit reciepe!</h1>
    <form @submit=${onEdit} id="edit-form">
      <h3 class="edit-form__title">${postData.title}</h3>
      <label for="imageUrl"
        >Image:
        <input
          id="image"
          type="text"
          name="imageUrl"
          placeholder="submit your image here"
          .value=${postData.imageUrl}
      /></label>
      <label for="title"
        >Title:
        <input
          id="title"
          type="text"
          name="title"
          placeholder="write your reciepe title here"
          .value=${postData.title}
      /></label>
      <label for="ingrediance"
        >Ingrediens:
        <input
          id="ingrediance"
          type="text"
          name="ingrediance"
          placeholder="put your ingrediens"
          .value=${postData.ingrediance}
      /></label>
      <label for="description"
        >description:
        <textarea
          cols="30"
          rows="10"
          id="desctiption"
          type="text"
          name="description"
          placeholder="description"
          .value=${postData.description}
        ></textarea>
      </label>
      <label for="prep-time"
        >Preparation Time in Minutes:
        <input
          id="prep-time"
          type="text"
          name="prepTime"
          placeholder="Preparation Time"
          .value=${postData.prepTime}
      /></label>
      <div class="btn-box">
        <button class="edit-btn" id="edit-btn" type="submit">edit</button>
        <button class="cancel-btn" id="cancel-btn" type="submit">cancel</button>
      </div>
    </form>
  </section>
`;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const postData = await getReciepeById(id);

  ctx.render(editTemp(postData, createSubmitHandler(onEdit)));

  async function onEdit({
    imageUrl,
    title,
    ingrediance,
    description,
    prepTime
  }) {
    await updateRecepi(id, {
      imageUrl,
      title,
      ingrediance,
      description,
      prepTime
    });

    page.redirect("/catalog");
  }
}
