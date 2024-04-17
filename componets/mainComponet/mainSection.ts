import { createGenericElement } from "../function.js";
import { createAboutUsSection } from "./mainSections/aboutUs.js";
import { createWhyUsSection } from "./mainSections/whyUS.js";
import { createServiceSection } from "./mainSections/service.js";
import { createMastersSection } from "./mainSections/ourMasters.js";
import { createCollectionSection } from "./mainSections/collectionPhoto.js";

const mineSection = [
  { tagName: "section", id: "aboutUsId", class: "aboutUsClass" },
  { tagName: "section", id: "serviceId", class: "serviceClass" },
  { tagName: "section", id: "whyUsId", class: "whyUsClass" },
  { tagName: "section", id: "ourMastersId", class: "ourMastersClass" },
  {
    tagName: "section",
    id: "collectionPhotoId",
    class: "collectionPhotoIdClass",
  },
];

export function createMain(page: HTMLElement) {
  //create main section
  const main = createGenericElement(
    "main",
    { id: "mainId", class: "mainClass" },
    undefined,
    page
  );

  mineSection.forEach((section) => {
    const { tagName, id, class: className } = section;
    createGenericElement(tagName, { id, class: className }, undefined, main);
  });

  const aboutUsSection = document.getElementById("aboutUsId");
  if (aboutUsSection) {
    createAboutUsSection(aboutUsSection);
  }

  const serviceSection = document.getElementById("serviceId");
  if (serviceSection) {
    createServiceSection(serviceSection);
  }
  const whyUsSection = document.getElementById("whyUsId");
  if (whyUsSection) {
    createWhyUsSection(whyUsSection);
  }

  const mastersSection = document.getElementById("ourMastersId");
  if (mastersSection) {
    createMastersSection(mastersSection);
  }

  const collectionPhotoSectin = document.getElementById("collectionPhotoId");
  if (collectionPhotoSectin) {
    createCollectionSection(collectionPhotoSectin);
  }
}

// export default createMain;
