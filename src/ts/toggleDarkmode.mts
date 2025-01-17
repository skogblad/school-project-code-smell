const toggleLightModeButton = document.querySelector(".toggle-btn");
(toggleLightModeButton as HTMLButtonElement).addEventListener("click", toggleLightMode);

export function toggleLightMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    (toggleLightModeButton as HTMLButtonElement).innerHTML = "Välj mörkt läge";
  } else {
    (toggleLightModeButton as HTMLButtonElement).innerHTML = "Välj ljust läge";
  }
}

export default toggleLightMode;
