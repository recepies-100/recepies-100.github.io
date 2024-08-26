import { html } from "@lit-html";
import { createSubmitHandler } from "../middlewares/submithandler.js";
import { register } from "../data/users.js";

const registerTemp = (onRegister) => html`
  <section id="login-wrapper">
      <div class="login-container">
        <div class="regiser-leftstaticside">
          &nbsp;
        </div>
        <div class="login-form__wrapper">
            <div class="login-form">
               
          <h4 class="login-heading">Register</h4>
          <form @submit=${onRegister} class="login-submit__form">
            <input class="login-username" type="text" name="username" placeholder="username" />
            <input class="login-password
            " type="password" name="password" placeholder="password" />
            <input class="login-password
            " type="password" name="repass" placeholder="re-password" />
            <button class="login-btn">register</button>
          </form>
            </div>
         
          <div class="footer-info">
            <p class="footer-question">Already have account?</p>
            <p class="footer-link">
              <a href="/login" class="footer-link-to">Sing up</a>
            </p>
          </div>
        </div>
      </div>
    </section>
`;

export function showRegisterView(ctx) {
  ctx.render(registerTemp(createSubmitHandler(onRegister)));
  async function onRegister({ username, password, repass }) {
    if (!username || !password || !repass) {
      return alert("All fields are required!");
    }
    if (password != repass) {
      return alert("password and repass must to be the same!");
    }
    await register(username, password);

    ctx.page.redirect("/");
  }
}
