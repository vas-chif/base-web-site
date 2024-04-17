import { createHeader } from "./componets/headerComponet/headerSection.js";
import { createMain } from "./componets/mainComponet/mainSection.js";
import { createFooter } from "./componets/footerComponet/footerSection.js";

const page = document.getElementById("page");

if (page) {
  createHeader(page);
  createMain(page);
  createFooter(page);
}
