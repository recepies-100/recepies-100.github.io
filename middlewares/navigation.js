import { getUserData } from "../src/storage.js";

export async function updateNav() {
  const userNav = document.getElementById("user-nav");
  const guestNav = document.getElementById("guest-nav");

  const hasUser = await getUserData();
  if (hasUser) {
    userNav.style.display = "block";
    guestNav.style.display = "none";
  } else {
    userNav.style.display = "none";
    guestNav.style.display = "block";
  }
}
