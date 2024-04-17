import { count } from "console";
import { createGenericElement } from "../../function.js";
import { createNestedDiv } from "../../function.js";
import { createListWithAttributes } from "../../function.js";
import { text } from "stream/consumers";

const divNamesWhyUs: (string | [string, string[]])[] = [
  ["divWURecension", ["divLeftWURec", "divRightWURec"]],
  ["divWUTitles", ["divMinTitleWUs", "divTitleWUs"]],
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

  const countElements = document.querySelectorAll("#countId");
  countElements.forEach((element) => {
    createGenericElement(
      "h1",
      { class: "counterNumber" },
      "6200",
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
} // end function createWhyUsSection
