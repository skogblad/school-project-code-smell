import { getPodcasts } from "./api.mts";

interface IProgram {
  socialimage: string;
  name: string;
  description: string;
  programurl: string;
}

const podCastContainer = document.querySelector(".podlist-container") as HTMLElement;

export async function createHtml() {
  const podCasts = await getPodcasts();

  podCasts.programs.forEach((program: IProgram) => {
    const innerArticle = createInnerArticle();

    createImg(innerArticle, program.socialimage);

    const textDiv = createTextDiv(innerArticle);

    createHeader(textDiv, program.name);
    createP(textDiv, program.description);
    createLink(textDiv, program.programurl);
  });
}

function createInnerArticle() {
  const innerArticle = document.createElement("article");
  innerArticle.setAttribute("class", "postcast-container");
  podCastContainer.appendChild(innerArticle);
  return innerArticle;
}

function createTextDiv(parent: HTMLElement) {
  const textDiv = document.createElement("div");
  textDiv.setAttribute("class", "podcast-text-container");
  parent.appendChild(textDiv);
  return textDiv;
}

function createLink(parent: HTMLElement, url: string) {
  const linkPlacement = document.createElement("a");
  const linkText = document.createTextNode("Lyssna här");
  linkPlacement.setAttribute("href", url);
  linkPlacement.appendChild(linkText);
  parent.appendChild(linkPlacement);
}

function createImg(parent: HTMLElement, src: string) {
  const imgPlacement = document.createElement("img");
  imgPlacement.setAttribute("src", src);
  imgPlacement.setAttribute("width", "100");
  imgPlacement.setAttribute("height", "100");
  parent.appendChild(imgPlacement);
}

function createP(parent: HTMLElement, text: string) {
  const descPlacement = document.createElement("p");
  descPlacement.setAttribute("class", "podcast-description")
  const desc = document.createTextNode(text);
  descPlacement.appendChild(desc);
  parent.appendChild(descPlacement);
}

function createHeader(parent: HTMLElement, name: string) {
  const headerPlacement = document.createElement("h2");
  const programName = document.createTextNode(name);
  headerPlacement.appendChild(programName);
  parent.appendChild(headerPlacement);
}

export default createHtml;
