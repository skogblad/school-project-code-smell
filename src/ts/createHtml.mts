import { getPodcasts } from "./api.mts";

interface IProgram {
  socialimage: string;
  name: string;
  description: string;
  programurl: string;
}

const podlistContainer = document.querySelector(".podlist-container") as HTMLElement;

export async function createHtml() {
  const podcasts = await getPodcasts();

  podcasts.programs.forEach((program: IProgram) => {
    const podcastContainer = createPodcastContainer();

    createPodcastImg(podcastContainer, program.socialimage);

    const podcastTextContainer = createPodcastTextContainer(podcastContainer);

    createPodcastTitle(podcastTextContainer, program.name);
    createPodcastDescription(podcastTextContainer, program.description);
    createPodcastLink(podcastTextContainer, program.programurl);
  });
}

function createPodcastContainer() {
  const podcastContainer = document.createElement("article");
  podcastContainer.setAttribute("class", "postcast-container");
  podlistContainer.appendChild(podcastContainer);
  return podcastContainer;
}

function createPodcastImg(parent: HTMLElement, src: string) {
  const podcastImg = document.createElement("img");
  podcastImg.setAttribute("src", src);
  podcastImg.setAttribute("width", "100");
  podcastImg.setAttribute("height", "100");
  podcastImg.setAttribute("alt", "Omslag för podcast");
  parent.appendChild(podcastImg);
}

function createPodcastTextContainer(parent: HTMLElement) {
  const podcastTextContainer = document.createElement("div");
  podcastTextContainer.setAttribute("class", "podcast-text-container");
  parent.appendChild(podcastTextContainer);
  return podcastTextContainer;
}

function createPodcastTitle(parent: HTMLElement, name: string) {
  const podcastTitle = document.createElement("h2");
  const programName = document.createTextNode(name);
  podcastTitle.appendChild(programName);
  parent.appendChild(podcastTitle);
}

function createPodcastDescription(parent: HTMLElement, text: string) {
  const podcastDescription = document.createElement("p");
  podcastDescription.setAttribute("class", "podcast-description");
  const programDescription = document.createTextNode(text);
  podcastDescription.appendChild(programDescription);
  parent.appendChild(podcastDescription);
}

function createPodcastLink(parent: HTMLElement, url: string) {
  const podcastLink = document.createElement("a");
  const linkText = document.createTextNode("Lyssna här");
  podcastLink.setAttribute("href", url);
  podcastLink.appendChild(linkText);
  parent.appendChild(podcastLink);
}

export default createHtml;
