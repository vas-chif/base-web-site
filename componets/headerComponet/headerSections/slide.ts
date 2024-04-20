import { createGenericElement } from "../../function.js";
import { createListWithAttributesLink } from "../../function.js";
import { BackgroundImageChanger } from "../../BackgroundImageChanger.js";
import { text } from "stream/consumers";

const liName = [
  { class: "liSlideAboutUs", text: "About Us", href: "#aboutUsId" },
  {
    class: "liSlideService",
    text: "Service and prices",
    href: "#serviceId",
  },
  { class: "liSlideMasters", text: "Masters", href: "#ourMastersId" },
  { class: "contacts", text: "Contacts", href: "#contatSectionID" },
  { class: "liwhyUs", text: "Why Us", href: "#whyUsId" },
  { class: "space2" },
  { class: "space2" },
  { class: "liSlideTel", text: "+3931111111", href: "tel:3931111111" },
  {
    id: "bookButtonNavId",
    class: "bookButtonNav",
    text: "book online",
    type: "button",
  },
];
const slideImg = [
  "./images/slide1.2.png",
  "./images/slide3.2.png",
  "./images/slide5.2.png",
  // "./images/slide6.1.png",
];
//create functio for header right section (named: slide)
export function createSlide(slide: HTMLElement) {
  //add backgrund image to slide component

  const backgroundChanger = new BackgroundImageChanger(slideImg, "slideId");

  //nav menu for navigate in the webpage
  const navSlide = createGenericElement(
    "nav",
    { class: "navSlide" },
    undefined,
    slide
  );

  const ulInfoSlideLink = createListWithAttributesLink(liName);
  navSlide.appendChild(ulInfoSlideLink);
  //div for insert information, sup - titte, title, sub - tittle
  const divSlideTexts = createGenericElement(
    "div",
    {
      class: "divSlideTexts",
    },
    undefined,
    slide
  );

  //div sup-title
  const miniInfoDvi = createGenericElement(
    "div",
    {
      class: "miniInfoDvi",
    },
    undefined,
    divSlideTexts
  );

  //create a ul for organizate the element minititle
  const ulMiniInfo = createGenericElement(
    "ul",
    { class: "ulMiniInfo" },
    undefined,
    miniInfoDvi
  );

  const liLineMiniTitle = createGenericElement(
    "li",
    {
      class: "lineMiniTitle",
    },
    undefined,
    ulMiniInfo
  );

  const liMiniTitle = createGenericElement(
    "li",
    {
      class: "liMiniTitle",
    },
    undefined,
    ulMiniInfo
  );

  const miniInfo = createGenericElement(
    "p",
    {
      class: "miniInfo",
    },
    "A podiatrist salon in Massa-Carrara",
    liMiniTitle
  );

  //div title and sub - title
  const titleDiv = createGenericElement(
    "div",
    { class: "titleDiv" },
    undefined,
    divSlideTexts
  );

  const title = createGenericElement(
    "h1",
    {
      class: "title",
    },
    "Vince Terapy",
    titleDiv
  );

  // p eleemt  sub -title
  const subTitle = createGenericElement(
    "p",
    {
      class: "subTitle",
    },
    "We are experts in podiatry We work quickly, carefully and with taste.",
    titleDiv
  );

  //div with button back and next for chenge backgraund
  const divSlideButton = createGenericElement(
    "div",
    {
      class: "divSlideButton",
    },
    undefined,
    slide
  );

  //adding button back and next to div
  const ulButtonBN = createGenericElement(
    "ul",
    { class: "ulBottonBN" },
    undefined,
    divSlideButton
  );

  //1° li
  const liButtonBack = createGenericElement(
    "li",
    { class: "liButtonBack" },
    undefined,
    ulButtonBN
  );

  //create a button back
  const buttonBack = createGenericElement(
    "button",
    { class: "buttonBack", type: "button" },
    "back",
    liButtonBack
  );

  //1° li next
  const liButtonNext = createGenericElement(
    "li",
    { class: "liButtonNext" },
    undefined,
    ulButtonBN
  );

  //create button next
  const buttonNext = createGenericElement(
    "button",
    { class: "buttonNext", type: "button" },
    "next",
    liButtonNext
  );

  buttonBack.addEventListener("click", () => {
    backgroundChanger.changeBackgroundBack();
  });
  buttonNext.addEventListener("click", () => {
    backgroundChanger.changeBackgroundNext();
  });
}
