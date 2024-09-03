import { html } from "@lit-html";
import page from "@page";
import { createSubmitHandler } from "../middlewares/submithandler.js";
import { createRecepi } from "../data/dataService.js";
import { getUserData } from "../src/storage.js";

const createTemp = (onCreate) => html`
  <section class="create">
    <h1 class="create-heading">Create your new reciepe!</h1>
    <form @submit=${onCreate} id="create-form">
      <h3 class="create-form__title">
        Put your data here to create a new reciepe!
      </h3>
      <label for="imageUrl"
        >Image:
        <input
          id="image"
          type="text"
          name="imageUrl"
          placeholder="submit your image here"
      /></label>
      <label for="title"
        >Title:
        <input
          id="title"
          type="text"
          name="title"
          placeholder="write your reciepe title here"
      /></label>
      <label for="ingrediens"
        >Ingrediens:
        <input
          id="ingrediens"
          type="text"
          name="ingrediance"
          placeholder="put your ingrediens"
      /></label>
      <label for="description"
        >desctiption:
        <textarea
          id="desctiption"
          type="text"
          name="description"
          placeholder="description"
        ></textarea>
      </label>

      <label for="preparation-time"
        >Preparation Time in Minutes:
        <input
          id="prep-time"
          type="text"
          name="prepTime"
          placeholder="write down preparation time"
      /></label>
      <button id="create-btn" type="submit">Create new Reciepe</button>
    </form>
  </section>
`;

export function showCreateView(ctx) {

  ctx.render(createTemp(createSubmitHandler(onCreate)));
  
  const currentUser = getUserData().objectId
  
  
  async function onCreate({
    imageUrl,
    title,
    ingrediance,
    description,
    prepTime,
  }) {

    await createRecepi({ imageUrl, title, ingrediance, description, prepTime }, currentUser);
    page.redirect("/catalog");
  }
}
