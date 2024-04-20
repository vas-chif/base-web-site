// import { count } from "console";
import { createGenericElement } from "../../function.js";
import { createNestedDiv } from "../../function.js";
import { createListWithAttributes } from "../../function.js";
// import { text } from "stream/consumers";

const divNamesWhyUs: (string | [string, string[]])[] = [
  ["divWURecension", ["divLeftWURec", "divRightWURec"]],
  ["divWUTitles", ["divMinTitleWUs", "divTitleWUs"]],
];

const liMiniTitleWUs = [
  { id: "liLineMinTitleWUs" },
  { id: "liMinTitleWUsTitleWUs" },
];
const conuterUl = [{ id: "countId" }, { id: "butonPlusId" }];

export function createWhyUsSection(whyUsSection: HTMLElement) {
  createNestedDiv(divNamesWhyUs, whyUsSection);
  //create element to divWURecension
  const divLeftWURec = document.getElementById("divLeftWURec");
  if (divLeftWURec) {
    const divSatisfed = createGenericElement(
      "div",
      { id: "divSatisfed", class: "divSReviews" },
      undefined,
      divLeftWURec
    );
    const ulSatisfed = createListWithAttributes(conuterUl);
    divSatisfed.appendChild(ulSatisfed);
    createGenericElement(
      "p",
      { class: "pSatisfedClass", id: "pDivReviews" },
      "Satisfied clients per day",
      divSatisfed
    );

    const divBestMast = createGenericElement(
      "div",
      { id: "divBestMast", class: "divSReviews" },
      undefined,
      divLeftWURec
    );

    const ulBestMast = createListWithAttributes(conuterUl);
    divBestMast.appendChild(ulBestMast);
    createGenericElement(
      "p",
      { class: "pBestMastClass", id: "pDivReviews" },
      "The best masters",
      divBestMast
    );
  }
  const divRightWURec = document.getElementById("divRightWURec");
  if (divRightWURec) {
    const divAwards = createGenericElement(
      "div",
      { id: "divAwards", class: "divSReviews" },
      undefined,
      divRightWURec
    );
    const uldivAwards = createListWithAttributes(conuterUl);
    divAwards.appendChild(uldivAwards);
    createGenericElement(
      "p",
      { class: "pBestMastClass", id: "pDivReviews" },
      "The best masters",
      divAwards
    );

    const divGifts = createGenericElement(
      "div",
      { id: "divGifts", class: "divSReviews" },
      undefined,
      divRightWURec
    );

    const uldivGifts = createListWithAttributes(conuterUl);
    divGifts.appendChild(uldivGifts);
    createGenericElement(
      "p",
      { class: "pBestMastClass", id: "pDivReviews" },
      "The best masters",
      divGifts
    );
  }

  const countElementsh1 = document.querySelectorAll("#countId");
  countElementsh1.forEach((element) => {
    createGenericElement(
      "h1",
      { class: "counterNumber" },
      "0",
      element as HTMLElement
    );
  });

  const buttonElements = document.querySelectorAll("#butonPlusId");
  buttonElements.forEach((element) => {
    createGenericElement(
      "button",
      { class: "buttonPlus" },
      "+",
      element as HTMLElement
    );
  });

  buttonElements.forEach((buttonElement) => {
    const h1Element = buttonElement.parentElement?.querySelector(
      ".counterNumber"
    ) as HTMLElement;
    const currentValue = parseInt(h1Element.innerText, 10);

    buttonElement.addEventListener("click", () => {
      h1Element.innerText = (currentValue + 1).toString();
    });
  });

  // work to divWUTitles

  const divMinTitleWUs = document.getElementById("divMinTitleWUs");
  const liMiniTitle = createListWithAttributes(liMiniTitleWUs);
  divMinTitleWUs?.appendChild(liMiniTitle);
  const liMinTitleWUsTitleWUs = document.getElementById(
    "liMinTitleWUsTitleWUs"
  );
  if (liMinTitleWUsTitleWUs) {
    createGenericElement(
      "p",
      { class: "pMiniTitleWUs" },
      "new performing procedures",
      liMinTitleWUsTitleWUs
    );
  }
  const divTitleWUs = document.getElementById("divTitleWUs");
  if (divTitleWUs) {
    createGenericElement(
      "h2",
      { class: "h2TitleWUs" },
      "Why do they come to us?",
      divTitleWUs
    );
    createGenericElement(
      "p",
      { class: "pTitleWUs" },
      "They only say good things about us. But it’s better to see and feel it once than to read it 10 times.",
      divTitleWUs
    );
  }
} // end function createWhyUsSection
