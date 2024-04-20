import { createSidebar } from "./headerSections/sidebar.js";
import { createSlide } from "./headerSections/slide.js";
import { createGenericElement } from "../function.js";

export function createHeader(page: HTMLElement) {
  const header = createGenericElement(
    "header",
    {
      id: "headerId",
      class: "headerClass",
    },
    undefined,
    page
  );

  //header Sidebar left
  const sidebarLeft = createGenericElement(
    "section",
    {
      id: "sidebarLeftId",
      class: "sidebarLeftClass",
    },
    undefined,
    header
  );
  if (sidebarLeft) {
    createSidebar(sidebarLeft);
  }

  //heaeder slide
  const slide = createGenericElement(
    "section",
    {
      id: "slideId",
      class: "slideClass",
    },
    undefined,
    header
  );
  if (slide) {
    createSlide(slide);
  }
}
