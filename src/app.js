import page from "@page";
import { showLoginView } from "../views/loginView.js";
import { addRender } from "../middlewares/render.js";
import { showRegisterView } from "../views/registerView.js";
import { showHomeView } from "../views/homeView.js";
import { logoutView } from "../views/logout.js";
import { showCatalogView } from "../views/showCatalog.js";
import { updateNav } from "../middlewares/navigation.js";
import { showCreateView } from "../views/createView.js";
import { showDetailsView } from "../views/detailView.js";
import { showEditView } from "../views/editView.js";

const root = document.querySelector("main");

updateNav();

page(addRender(root));
page("/", showHomeView);
page("/index", showHomeView);
page("/login", showLoginView);
page("/register", showRegisterView);
page("/logout", logoutView);
page("/catalog", showCatalogView);
page("/create", showCreateView);
page("/details/:id", showDetailsView);
page("/edit/:id", showEditView);
page.start();

const menu = document.querySelector(".hamburger");
const navBox = document.querySelector(".nav-box");

menu.addEventListener("click", onclick);

function onclick(e) {

  menu.classList.toggle("open");



  navBox.style.display === 'block' ?  navBox.style.display = 'none' :  navBox.style.display = 'block'
}
