import {
  createGenericElement,
  createListWithAttributes,
  addElemntsTuLi,
} from "../../function.js";

const listRegInfo = [
  { id: "liNamePhone", class: "liReg" },
  { id: "liMessageLabel", class: "liReg" },
  { id: "liMessageInput", class: "liReg" },
  { id: "liButton", class: "liReg" },
];

export function creatFooterRegistration(contacts: HTMLElement) {
  //div title
  createGenericElement(
    "div",
    { id: "divTitleRegistration" },
    undefined,
    contacts
  );
  createGenericElement(
    "h2",
    { class: "tittleRegClass" },
    "Online registration",
    `divTitleRegistration`
  );
  //div info
  createGenericElement(
    "div",
    { id: "divInfoRegistration" },
    undefined,
    contacts
  );

  const listContatc = createListWithAttributes(listRegInfo);
  const infoRegDiv = document.getElementById("divInfoRegistration");
  if (infoRegDiv) {
    infoRegDiv.appendChild(listContatc);
  }
  //add element to require name and phone
  addElemntsTuLi([
    {
      tag: "ul",
      attributes: { id: "ulRegInfo" },
      parentId: "liNamePhone",
    },
    {
      tag: "li",
      attributes: { id: "liName", class: "liInputInfo" },
      parentId: "ulRegInfo",
    },
    {
      tag: "label",
      attributes: {
        id: "labelName",
        class: "labelsClass",
      },
      textContent: "Name*",
      parentId: "liName",
    },
    {
      tag: "input",
      attributes: {
        type: "text",
        id: "inputName",
        class: "inputsClass",
        maxlength: "30",
      },
      parentId: "labelName",
    },
    {
      tag: "li",
      attributes: { id: "liTel", class: "liInputInfo" },
      parentId: "ulRegInfo",
    },
    {
      tag: "label",
      attributes: {
        id: "labelTel",
        class: "labelsClass",
      },
      textContent: "Telephone*",
      parentId: "liTel",
    },
    {
      tag: "input",
      attributes: {
        type: "number",
        id: "inputTel",
        class: "inputsClass",
        maxlength: "14",
      },
      parentId: "labelTel",
    },
  ]);
  //add littation characters to the input tel
  const inputTel = document.getElementById("inputTel") as HTMLInputElement;
  inputTel.addEventListener("input", function () {
    if (this.value.length > 14) {
      this.value = this.value.slice(0, 14);
    }
  });

  //add element to require a mesage
  //add message label
  addElemntsTuLi([
    {
      tag: "label",
      attributes: {
        id: "labelMessage",
        class: "labelsClass",
      },
      textContent: "message",
      parentId: "liMessageLabel",
    },
  ]);
  // add message input
  addElemntsTuLi([
    {
      tag: "textarea",
      attributes: {
        type: "text",
        id: "inputMessage",
        class: "inputsClass",
        maxlength: "500",
        oninput: "resizeTextArea()",
      },
      parentId: "liMessageInput",
    },
  ]);
  //add element botton
  addElemntsTuLi([
    {
      tag: "button",
      attributes: {
        id: "buttonSend",
        class: "bookButton",
        type: "button",
      },
      textContent: "send",
      parentId: "liButton",
    },
  ]);
}
