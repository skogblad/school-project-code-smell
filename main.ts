import "./style.scss";
import { createHtml } from "./src/ts/createHtml.mjs";
import toggleLightMode from "./src/ts/toggleDarkmode.mjs";

function init() {
  toggleLightMode();
  createHtml();
}

init();
