import { createFooterContacts } from "./footerSections/contacts.js";
import { creatFooterRegistration } from "./footerSections/registration.js";
import { createGenericElement } from "../function.js";
export function createFooter(page: HTMLElement) {
  const footer = createGenericElement(
    "footer",
    {
      id: "footerId",
    },
    undefined,
    page
  );
  const regSection = createGenericElement(
    "div",
    {
      id: "registrationDivID",
    },
    undefined,
    footer
  );
  if (regSection) {
    creatFooterRegistration(regSection);
  }
  const contatactSection = createGenericElement(
    "div",
    {
      id: "contatDivID",
    },
    undefined,
    footer
  );
  if (contatactSection) {
    createFooterContacts(contatactSection);
  }
}
