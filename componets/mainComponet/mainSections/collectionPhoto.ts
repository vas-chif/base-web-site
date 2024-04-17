import { createGenericElement } from "../../function.js";

export function createCollectionSection(serviceSection: HTMLElement) {
  const collectionTitleH3 = createGenericElement(
    "h3",
    { class: "collectionTitleH3" },
    "Collection Photo",
    serviceSection
  );
}
