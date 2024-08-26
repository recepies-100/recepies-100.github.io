import  page  from "@page";
import { updateNav } from "../middlewares/navigation.js";
import { logout } from "../data/users.js";

export async function logoutView(ctx) {
  
  await logout()

  updateNav()
  page.redirect('/')
}