import { createGenericElement } from "../../function.js";
import { createListWithAttributes } from "../../function.js";
import { createListWithAttributesLink } from "../../function.js";
import { BackgroundImageChanger } from "../../BackgroundImageChanger.js";

const liNameDivUperTitle = [
  { id: "liLineUperTitleId" },
  { id: "liUperTitleId" },
];

const liNameDivTitle = [
  { id: "liTitleAboutUsId" },
  { id: "liSubTitleAboutUsId" },
  { id: "liPharagraphAboutUsId" },
  { id: "liButtonAboutUsId" },
];
const aboutUsImgOneArr = [
  "./images/aboutUs1.1.png",
  "./images/aboutUs2.1.png",
  "./images/aboutUs3.1.png",
];
const aboutUsImgTwoArr = [
  "./images/aboutUs3.1.png",
  "./images/aboutUs2.1.png",
  "./images/aboutUs1.1.png",
];
export function createAboutUsSection(aboutUsSection: HTMLElement) {
  //create left div sectio with img
  const aboutUsDivImg = createGenericElement(
    "div",
    {
      id: "aboutUsDivImgId",
    },
    undefined,
    aboutUsSection
  );
  // adding div img 1 to div
  const aboutUsImgOne = createGenericElement(
    "div",
    { id: "aboutUsImgOne" },
    undefined,
    aboutUsDivImg
  );
  const backgroundImgOne = new BackgroundImageChanger(
    aboutUsImgOneArr,
    "aboutUsImgOne"
  );

  // adding div img 2 to div
  const aboutUsImgTwo = createGenericElement(
    "div",
    { id: "aboutUsImgTwo" },
    undefined,
    aboutUsDivImg
  );
  const backgroundImgTwo = new BackgroundImageChanger(
    aboutUsImgTwoArr,
    "aboutUsImgTwo"
  );

  //create right div sectio text
  const aboutAsDivText = createGenericElement(
    "div",
    {
      class: "aboutAsDivTextClass",
    },
    undefined,
    aboutUsSection
  );

  //create upper div sectio of the div sectio text
  const aboutAsDivUperTitle = createGenericElement(
    "div",
    {
      class: "aboutAsDivUperClass",
    },
    undefined,
    aboutAsDivText
  );

  const ulUperTitle = createListWithAttributes(liNameDivUperTitle);
  aboutAsDivUperTitle.appendChild(ulUperTitle);
  const liUperTitleId = document.getElementById("liUperTitleId");
  if (liUperTitleId) {
    const upperTitleAboutUs = createGenericElement(
      "p",
      { class: "upperTitleAUClass" },
      "About AS",
      liUperTitleId
    );
  }

  //create down div sectio of the div sectio text
  const aboutAsDivTitle = createGenericElement(
    "div",
    {
      class: "aboutAsDivTitleClass",
    },
    undefined,
    aboutAsDivText
  );
  const ulAbouUsText = createListWithAttributes(liNameDivTitle);
  aboutAsDivTitle.appendChild(ulAbouUsText);

  const liTitleAboutUsId = document.getElementById("liTitleAboutUsId");
  if (liTitleAboutUsId) {
    createGenericElement(
      "h2",
      {
        class: "titleDownDivClass",
      },
      "Best expert/podiatrist your city",
      liTitleAboutUsId
    );
  }
  const liSubTitleAboutUsId = document.getElementById("liSubTitleAboutUsId");
  if (liSubTitleAboutUsId) {
    const subTitleDownDiv = createGenericElement(
      "p",
      {
        class: "subTitleDownDivClass",
      },
      "If you want to add more safety to your health, you should definitely come to us.",
      liSubTitleAboutUsId
    );
  }

  const liPharagraphAboutUsId = document.getElementById(
    "liPharagraphAboutUsId"
  );
  if (liPharagraphAboutUsId) {
    const pTitleDownDiv = createGenericElement(
      "p",
      {
        class: "pTitleDownDivlass",
      },
      "We are a team that never stops there and longs for change. And when you fall into the hands of our master, then you can never be the same again. We are a team that is always on the same page with our clients. Therefore, we are always ready to improve everyone who comes to us!",
      liPharagraphAboutUsId
    );
  }
  const libuttonAboutUsId = document.getElementById("liButtonAboutUsId");
  if (libuttonAboutUsId) {
    const buttonDownDiv = createGenericElement(
      "button",
      { id: "buttonAboutUs", class: "bookButton", type: "button" },
      "online registration",
      libuttonAboutUsId
    );
  }
} //end functin createAboutUsSection
