import { html } from "@lit-html";
import { updateNav } from "../middlewares/navigation.js";
import { getAllRecepies } from "../data/dataService.js";
import { getUserData } from "../src/storage.js";

const homeTemp = (userData, recipies) => html`
  <!-- home section -->
  <section class="home">
    <h3 class="home-subheading">Transform your meal prep</h3>
    <h1 class="home-heading">
      Own created reciepes and full catalog of all posted meals. You can post
      your own reciepes. Go to catalog and see all posted reciepes, we are sure
      you can find something for today meal.
    </h1>

    <div class="home-box">
      <p class="link-box">
        <a href="/catalog" class="home-catalog-link"
          >view all reciepies &RightArrow;</a
        >
      </p>
      <p class="link-box">
        ${!userData
          ? html`<a href="/register" class="home-singuplink">
              join us now! &RightArrow;
            </a>`
          : null}
      </p>
    </div>
    <ul class="home-catalog">
      ${recipies.map((x) => {
        if (recipies.length > 5) {
          recipies.length = 5;
        }
        return homeCatalogTemp(x);
      })}
    </ul>
  </section>
`;

const homeCatalogTemp = (recepi) => html`
  <li class="home-catalog__card">
    <img class="home-img__card" src=${recepi.imageUrl} alt="omlette-img" />
    <h2 class="home-catalog__heading">
      <a class="catalog-link" href="/details/${recepi.objectId}"
        >${recepi.title}</a
      >
    </h2>

    <p class="description">${recepi.description}</p>
  </li>
`;

export async function showHomeView(ctx) {
  const data = await getAllRecepies();
  let [recepies] = Object.entries(data);
  recepies = recepies[1].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const userData = await getUserData();

  updateNav();
  ctx.render(homeTemp(Boolean(userData), recepies));
}
