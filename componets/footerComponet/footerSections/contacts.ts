import {
  createGenericElement,
  createListWithAttributes,
  addElemntsTuLi,
} from "../../function.js";

// creat a list fo all info contatcts
const listContatcs = [
  { id: "liAdressContacts", class: "liContacts" },
  { id: "liTelContacts", class: "liContacts" },
  { id: "liMailContacts", class: "liContacts" },
  { id: "liMiniTitleContacts", class: "liContacts" },
  { id: "liTimeWorkContacts", class: "liContacts" },
];

export function createFooterContacts(contacts: HTMLElement) {
  //div title
  createGenericElement("div", { id: "divTitleContacts" }, undefined, contacts);
  createGenericElement(
    "h2",
    { class: "titleContactClass" },
    "Contacts",
    `divTitleContacts`
  );

  //div info
  createGenericElement("div", { id: "divInfoContacts" }, undefined, contacts);

  const listContatc = createListWithAttributes(listContatcs);
  const infoContactDiv = document.getElementById("divInfoContacts");
  if (infoContactDiv) {
    infoContactDiv.appendChild(listContatc);
  }

  addElemntsTuLi([
    {
      tag: "ul",
      attributes: { id: "ulIdAdress" },
      parentId: "liAdressContacts",
    },
    {
      tag: "li",
      attributes: { id: "adressLink" },
      parentId: "ulIdAdress",
    },
    {
      tag: "a",
      attributes: {
        id: "aTagAdressLink",
        href: "https://maps.app.goo.gl/76a1QHZrecWRiVmLA",
        target: "_blank",
      },
      parentId: "adressLink",
    },
    {
      tag: "img",
      attributes: { src: "./images/location.svg" },
      parentId: "aTagAdressLink",
    },
    {
      tag: "li",
      attributes: { id: "txtAdresLink" },
      parentId: "ulIdAdress",
    },
    {
      tag: "p",
      attributes: { id: "pAdres" },
      textContent: "Paiaza Mercurio 8, Massa",
      parentId: "txtAdresLink",
    },
  ]);

  //work with telephon off contacts
  addElemntsTuLi([
    {
      tag: "ul",
      attributes: { id: "ulIdTel" },
      parentId: "liTelContacts",
    },
    {
      tag: "li",
      attributes: { id: "telLink" },
      parentId: "ulIdTel",
    },
    {
      tag: "a",
      attributes: {
        id: "aTelLink",
        href: "tel:3931111111",
        target: "_blank",
      },
      parentId: "telLink",
    },
    {
      tag: "img",
      attributes: { src: "./images/tel.svg" },
      parentId: "aTelLink",
    },
    {
      tag: "li",
      attributes: { id: "txtTelLink" },
      parentId: "ulIdTel",
    },
    {
      tag: "p",
      attributes: { id: "pTel" },
      textContent: "+39 311 111 11",
      parentId: "txtTelLink",
    },
  ]);

  //work with mail off contacts
  addElemntsTuLi([
    {
      tag: "ul",
      attributes: { id: "ulIdMail" },
      parentId: "liMailContacts",
    },
    {
      tag: "li",
      attributes: { id: "mailLink" },
      parentId: "ulIdMail",
    },
    {
      tag: "a",
      attributes: {
        id: "aMailLink",
        href: "tel:3931111111",
        target: "_blank",
      },
      parentId: "mailLink",
    },
    {
      tag: "img",
      attributes: { src: "./images/mail.svg" },
      parentId: "aMailLink",
    },
    {
      tag: "li",
      attributes: { id: "txtMailLink" },
      parentId: "ulIdMail",
    },
    {
      tag: "p",
      attributes: { id: "pTel" },
      textContent: "vince.terapy@email.com",
      parentId: "txtMailLink",
    },
  ]);
  //work with mail off mini title
  addElemntsTuLi([
    {
      tag: "ul",
      attributes: { id: "ulMiniTitle" },
      parentId: "liMiniTitleContacts",
    },
    {
      tag: "li",
      attributes: { id: "lineMinititle" },
      parentId: "ulMiniTitle",
    },
    {
      tag: "li",
      attributes: { id: "minititle" },
      parentId: "ulMiniTitle",
    },
    {
      tag: "p",
      attributes: { id: "pMiniTitle" },
      textContent: "working hours",
      parentId: "minititle",
    },
  ]);
  //work with mail off work time
  addElemntsTuLi([
    {
      tag: "p",
      attributes: { id: "pWorkTime" },
      textContent: "Every day from 9:00 to 20:00",
      parentId: "liTimeWorkContacts",
    },
  ]);
}
