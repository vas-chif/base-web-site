import { text } from "stream/consumers";
import { createGenericElement } from "../../function.js";
import { createListWithAttributesLink } from "../../function.js";

const liNameSocial = [
  {
    class: "liSocialHeaderFB",
    text: "Facebook",
    href: "https://www.facebook.com/",
    target: "_blank",
  },
  {
    class: "liSocialHeaderInst",
    text: "Instagram",
    href: "https://www.instagram.com/",
    target: "_blank",
  },
  {
    class: "liSocialHeaderLine",
  },
];

export function createSidebar(sidebarLeft: HTMLElement) {
  //logo div
  const divLogo = createGenericElement(
    "div",
    { class: "divLogo" },
    undefined,
    sidebarLeft
  );

  const logo = createGenericElement(
    "img",
    {
      src: "./images/logo.svg",
      class: "logo",
    },
    undefined,
    divLogo
  );

  // socila div
  const divSocialHeader = createGenericElement(
    "div",
    {
      class: "divSocialHeader",
    },
    undefined,
    sidebarLeft
  );

  const ulSocialHeaderHT = createListWithAttributesLink(liNameSocial);
  divSocialHeader.appendChild(ulSocialHeaderHT);
}
