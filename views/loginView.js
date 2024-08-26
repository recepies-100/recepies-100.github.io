import { html } from "@lit-html";
import  page  from "@page";
import { createSubmitHandler } from "../middlewares/submithandler.js";
import { login } from "../data/users.js";

const loginTemp = (onLogin) => html`
  <section id="login-wrapper">
      <div class="login-container">
        <div class="login-leftstaticside">
          &nbsp;
        </div>
        <div class="login-form__wrapper">
            <div class="login-form">
               
          <h4 class="login-heading">Login</h4>
          <form @submit=${onLogin} class="login-submit__form">
            <input class="login-username" type="text" name="username" placeholder="username" />
            <input class="login-password
            " type="password" name="password" placeholder="password" />
            <button class="login-btn">sign in</button>
          </form>
            </div>
         
          <div class="footer-info">
            <p class="footer-question">Don't have an account yet?</p>
            <p class="footer-link">
              <a href="/register" class="footer-link-to">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </section>
`;

export function showLoginView(ctx) {
  ctx.render(loginTemp(createSubmitHandler(onLogin)));
  async function onLogin({ username, password }) {
    if (!username || !password) {
      return alert('all fields are required!')
    }
    await login(username, password);
  
    page.redirect('/');
  }
}

