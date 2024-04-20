import {
  createGenericElement,
  createListWithAttributes,
} from "../../function.js";
const collectionDiv = ["divColectionMiniTitle", "divColectionGallery"];
const liMiniTitColl = [{ id: "liLineMinTitlColl" }, { id: "liMinTitleColl" }];
const collectionImg = [
  "./images/collect1.png",
  "./images/collect2.png",
  "./images/collect3.png",
  "./images/collect4.png",
];
const divColectionFoto = ["divImg1", "divImg2", "divImg3", "divImg4"];

export function createCollectionSection(serviceSection: HTMLElement) {
  for (const item in collectionDiv) {
    createGenericElement(
      "div",
      { id: `${collectionDiv[item]}` },
      undefined,
      serviceSection
    );
  }

  const searchedMiniTitle = document.getElementById("divColectionMiniTitle");
  if (searchedMiniTitle) {
    const creatLitColl = createListWithAttributes(liMiniTitColl);
    searchedMiniTitle.appendChild(creatLitColl);
  }

  const miniTitleCol = document.getElementById("liMinTitleColl");
  if (miniTitleCol) {
    createGenericElement(
      "p",
      { class: "pMinTitlColl" },
      "Ancient Greek terms pous, podòs, meaning “foot” and logos, ou, meaning “reason, speech”",
      miniTitleCol
    );
  }

  const creatDivImage = document.getElementById("divColectionGallery");
  if (creatDivImage) {
    for (let i = 0; i < divColectionFoto.length; i++) {
      const element = createGenericElement(
        "div",
        { id: `${divColectionFoto[i]}`, class: "divImgGallery" },
        undefined,
        creatDivImage
      );
      createGenericElement(
        "img",
        { src: `${collectionImg[i]}` },
        undefined,
        element
      );
    }
  }
}
