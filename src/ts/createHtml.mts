import { getPodcasts } from "./api.mts";

const podCastContainer = document.querySelector(".podlist-container");

let i = 0;

export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.programs.forEach(() => {
    i++;
    const innerArticle = createInnerArticle();

    createImg();

    const textDiv = createTextDiv();

    createHeader();
    createP();
    createLink();

    function createInnerArticle() {
      const innerArticle = document.createElement("article");
      innerArticle.setAttribute("class", "postcast-container");
      innerArticle.setAttribute("tabindex", "1");
      (podCastContainer as HTMLElement).appendChild(innerArticle);
      return innerArticle;
    }

    function createTextDiv() {
      const textDiv = document.createElement("div");
      textDiv.setAttribute("class", "podcast-text-container");
      innerArticle.appendChild(textDiv);
      return textDiv;
    }

    function createLink() {
      const linkPlacement = document.createElement("a");
      const linkText = document.createTextNode("Lyssna här");
      linkPlacement.setAttribute("href", podCasts.programs[i].programurl);
      linkPlacement.setAttribute("tabindex", "1");
      linkPlacement.appendChild(linkText);
      textDiv.appendChild(linkPlacement);
    }
    function createImg() {
      const imgPlacement = document.createElement("img");
      imgPlacement.setAttribute("src", podCasts.programs[i].socialimage);
      imgPlacement.setAttribute("width", "100");
      imgPlacement.setAttribute("height", "100");
      innerArticle.appendChild(imgPlacement);
    }

    function createP() {
      const descPlacement = document.createElement("p");
      descPlacement.setAttribute("class", "podcast-description")
      const desc = document.createTextNode(podCasts.programs[i].description);
      descPlacement.appendChild(desc);
      textDiv.appendChild(descPlacement);
    }

    function createHeader() {
      const headerPlacement = document.createElement("h2");
      const programName = document.createTextNode(podCasts.programs[i].name);
      headerPlacement.appendChild(programName);
      textDiv.appendChild(headerPlacement);
    }
  });
}

export default createHtml;
