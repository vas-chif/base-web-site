import {
  createGenericElement,
  createListWithAttributes,
  createNestedDiv,
  insertSocialProfiles,
} from "../../function.js";
const divScestionMasters: (string | [string, string[]])[] = [
  ["divOurMasterTitle", ["divUlMaster", "divTitleMaster"]],
  ["divOurMastersInfo", ["divM1", "divM2", "divM3"]],
];
const liMiniTitl = [{ id: "liLineMinTitlOM" }, { id: "liMinTitleWUsTitleOM" }];

const liOurMaster = [
  [{ id: "liImgOM1" }, { id: "liNameOM1" }, { id: "liSocialOM1" }],
  [{ id: "liImgOM2" }, { id: "liNameOM2" }, { id: "liSocialOM2" }],
  [{ id: "liImgOM3" }, { id: "liNameOM3" }, { id: "liSocialOM3" }],
];
const listSocialProf = [
  {
    class: "liFacebook",
    img: "./images/facebook.svg",
    href: "https://www.facebook.com/",
    target: "_blank",
  },
  {
    class: "liInstagram",
    img: "./images/instagram.svg",
    href: "https://www.instagram.com/",
    target: "_blank",
  },
  {
    class: "liLinkedin",
    img: "./images/linkedin.svg",
    href: "https://www.linkedin.com/",
    target: "_blank",
  },
];

export function createMastersSection(mastersSection: HTMLElement) {
  // creat div for master section
  createNestedDiv(divScestionMasters, mastersSection);
  //work to divOurMasterTitle
  const divUlMaster = document.getElementById("divUlMaster");
  const liMiniTitleOM = createListWithAttributes(liMiniTitl);
  divUlMaster?.appendChild(liMiniTitleOM);
  const liMinTitleWUsTitleOM = document.getElementById("liMinTitleWUsTitleOM");
  if (liMinTitleWUsTitleOM) {
    createGenericElement(
      "p",
      { class: "pMinTitleWUsTitleOM" },
      "for true connoisseurs of atmosphere",
      liMinTitleWUsTitleOM
    );
  }

  const divTitleMaster = document.getElementById("divTitleMaster");
  if (divTitleMaster) {
    createGenericElement(
      "h2",
      { class: "h2TitleMaster" },
      "Our masters",
      divTitleMaster
    );
  }
  //work to divOurMastersInfo//
  const divOurMastersInfo = document.getElementById("divOurMastersInfo");
  if (divOurMastersInfo) {
    for (let i = 0; i < liOurMaster.length; i++) {
      const sublist = liOurMaster[i];
      const divId = `divM${i + 1}`;
      const div = document.getElementById(divId);

      if (div) {
        const ul = document.createElement("ul");
        sublist.forEach((item) => {
          const li = document.createElement("li");
          for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
              li.setAttribute(key, (item as { [key: string]: string })[key]);
            }
          }
          ul.appendChild(li);
        });
        div.appendChild(ul);
      }
    }
  }

  //firs master
  const liImgOM1 = document.getElementById("liImgOM1");
  if (liImgOM1) {
    createGenericElement(
      "img",
      { src: "./images/ourMNico.png", class: "imgMasters" },
      undefined,
      liImgOM1
    );
  }
  const liNameOM1 = document.getElementById("liNameOM1");
  if (liNameOM1) {
    createGenericElement(
      "h6",
      { class: "nameMasters" },
      "Nicho Paramount",
      liNameOM1
    );
    createGenericElement(
      "p",
      { class: "professionMasters" },
      "Podiatrist",
      liNameOM1
    );
  }
  //ad social lint for any master
  insertSocialProfiles(listSocialProf, "liSocialOM1");

  // //second master
  const liImgOM2 = document.getElementById("liImgOM2");
  if (liImgOM2) {
    createGenericElement(
      "img",
      { src: "./images/ourMNati.png", class: "imgMasters" },
      undefined,
      liImgOM2
    );
  }
  const liNameOM2 = document.getElementById("liNameOM2");
  if (liNameOM2) {
    createGenericElement(
      "h6",
      { class: "nameMasters" },
      "Ntaly Sboltal",
      liNameOM2
    );
    createGenericElement(
      "p",
      { class: "professionMasters" },
      "Nurse",
      liNameOM2
    );
  }
  //ad social lint for any master
  insertSocialProfiles(listSocialProf, "liSocialOM2");

  // /// thirt master
  const liImgOM3 = document.getElementById("liImgOM3");
  if (liImgOM3) {
    createGenericElement(
      "img",
      { src: "./images/ourMGio.png", class: "imgMasters" },
      undefined,
      liImgOM3
    );
  }
  const liNameOM3 = document.getElementById("liNameOM3");
  if (liNameOM3) {
    createGenericElement(
      "h6",
      { class: "nameMasters" },
      "Giov Marchisk",
      liNameOM3
    );
    createGenericElement(
      "p",
      { class: "professionMasters" },
      "Osteopath",
      liNameOM3
    );
  }

  //ad social lint for any master
  insertSocialProfiles(listSocialProf, "liSocialOM3");
} // end funcion createMastersSection
