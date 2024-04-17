import { createGenericElement } from "../../function.js";
import { createListWithAttributes } from "../../function.js";
import { createNestedUL } from "../../function.js";

const divNamesService = [
  "divMiniTitleService",
  "divTitleService",
  ["divProfession", ["divPodologia", "divMassoterapia", "divPosturologia"]],
  "divButtonService",
];

const liMiniTitleService = [
  { id: "liLineMiniTitleServiceId" },
  { id: "liMiniTitleServiceId" },
];
const liServicePodologia = [
  "Lorem, ipsum",
  "Lorem, dolor sit",
  "Lorem consectetur",
];
const liPricePodologia = ["30 €", "100 €", "50 €"];

const liServiceMassoterapia = [
  "Lorem aspernatur",
  "Lorem esse maiores",
  "Lorem eligendi",
];
const liPriceMassoterapia = ["310 €", "330 €", "80 €"];

const liServicePosturologia = [
  "Lorem accusantium",
  "Lorem, sit elit",
  "Lorem adipisicing",
];
const liPricePosturologia = ["120 €", "250 €", "55 €"];

export function createServiceSection(serviceSection: HTMLElement) {
  divNamesService.forEach((elementName) => {
    if (Array.isArray(elementName)) {
      const parentDiv = createGenericElement("div", {
        id: `${elementName[0]}`,
      });
      if (Array.isArray(elementName[1])) {
        elementName[1].forEach((childName: string) => {
          const childDiv = createGenericElement("div", { id: `${childName}` });
          childDiv.className = "childDivProfession";
          parentDiv.appendChild(childDiv);
        });
      } else {
      }
      serviceSection.appendChild(parentDiv);
    } else {
      const div = createGenericElement("div", { id: `${elementName}` });
      serviceSection.appendChild(div);
    }
  });
  const divMiniTitleService = document.getElementById("divMiniTitleService");
  const liMiniTitle = createListWithAttributes(liMiniTitleService);
  divMiniTitleService?.appendChild(liMiniTitle);

  const liMiniTitleServiceId = document.getElementById("liMiniTitleServiceId");
  if (liMiniTitleServiceId) {
    createGenericElement(
      "p",
      {
        class: "miniTitleServiceClass",
      },
      "Spend time in the company of the best masters",
      liMiniTitleServiceId
    );
  }
  const divTitleService = document.getElementById("divTitleService");
  if (divTitleService) {
    createGenericElement(
      "h2",
      { class: "titleServiceClass" },
      "Services and prices",
      divTitleService
    );
  }
  //create servite and price for Podologia
  const divPodologia = document.getElementById("divPodologia");
  if (divPodologia) {
    createGenericElement("h3", { class: "profDiv" }, "Podologia", divPodologia);

    createNestedUL(
      "ul",
      { id: "ulDivPod", class: "ulDivProff" },
      liServicePodologia,
      liPricePodologia,
      divPodologia
    );
  }
  //create servite and price for Massoterapia
  const divMassoterapia = document.getElementById("divMassoterapia");
  if (divMassoterapia) {
    createGenericElement(
      "h3",
      { class: "profDiv" },
      "Massoterapia",
      divMassoterapia
    );

    createNestedUL(
      "ul",
      { id: "ulDivPod", class: "ulDivProff" },
      liServiceMassoterapia,
      liPriceMassoterapia,
      divMassoterapia
    );
  }
  //create servite and price for Posturologia
  const divPosturologia = document.getElementById("divPosturologia");
  if (divPosturologia) {
    createGenericElement(
      "h3",
      { class: "profDiv" },
      "Posturologia",
      divPosturologia
    );

    createNestedUL(
      "ul",
      { id: "ulDivPost", class: "ulDivProff" },
      liServicePosturologia,
      liPricePosturologia,
      divPosturologia
    );
  }
  const divButtonService = document.getElementById("divButtonService");
  if (divButtonService) {
    createGenericElement(
      "button",
      {
        id: "butonServie",
        class: "bookButton",
        type: "button",
      },
      "oonline registation",
      divButtonService
    );
  }
} //end method createServiceSection
