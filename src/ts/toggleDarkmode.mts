const toggleLightModeButton = document.querySelector(".toggle-btn");
(toggleLightModeButton as HTMLButtonElement).addEventListener(
  "click",
  toggleLightMode,
);
console.log(toggleLightModeButton);

export function toggleLightMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    (toggleLightModeButton as HTMLButtonElement).innerHTML = "Välj mörkt läge";
    console.log("mörkt läge");
  } else {
    (toggleLightModeButton as HTMLButtonElement).innerHTML = "Välj ljust läge";
    console.log("ljust läge");
  }
}

export default toggleLightMode;
