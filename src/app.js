
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


const root = document.querySelector('main')

updateNav();

page(addRender(root));
page('/', showHomeView);
page('/index', showHomeView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', logoutView);
page('/catalog', showCatalogView);
page('/create', showCreateView);
page('/details/:id', showDetailsView);
page.start()

