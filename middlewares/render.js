import { render as baseRender } from "@lit-html";

export function addRender(root) {
  return function (ctx, next) {
    ctx.render = render;
    next();
  };

  function render(tempResult) {
    baseRender(tempResult, root);
  }
}
