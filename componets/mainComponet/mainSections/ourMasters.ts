import { createGenericElement } from "../../function.js";

export function createMastersSection(mastersSection: HTMLElement) {
  const mstersTitleH3 = createGenericElement(
    "h3",
    { class: "mstersTitleH3" },
    "Our Masters",
    mastersSection
  );
}
