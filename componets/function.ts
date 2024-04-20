import { SlowBuffer } from "buffer";
import { it } from "node:test";

export function createGenericElement(
  tagName: string,
  attributes?: {
    class?: string;
    id?: string;
    href?: string;
    type?: string;
    src?: string;
    target?: string;
  },
  textContent?: string,
  parentElement?: HTMLElement | string
): HTMLElement {
  const element = document.createElement(tagName);

  if (attributes) {
    const { class: className, id, href, type, src, target } = attributes;
    if (className) element.classList.add(className);
    if (id) element.id = id;
    if (href) {
      element.setAttribute("href", href);
    }
    if (type) {
      element.setAttribute("type", type);
    }
    if (src) {
      element.setAttribute("src", src);
    }
    if (target) {
      element.setAttribute("target", target);
    }
  }

  if (textContent) {
    element.textContent = textContent;
  }
  if (parentElement) {
    const parent =
      typeof parentElement === "string"
        ? document.getElementById(parentElement)
        : parentElement;
    if (parent) parent.appendChild(element);
  }
  return element;
} // end function createGenericElement

// const div = createElement("div", { class: "container", id: "myDiv" },"Contenuto del div", parent);*/

export function createListWithAttributes(
  liItems: { [key: string]: string }[]
): HTMLUListElement {
  const ul = document.createElement("ul");

  // Aggiungi gli elementi della lista (li)

  liItems.forEach((liItemAttributes) => {
    const li = document.createElement("li");

    // Aggiungi attributi agli elementi li
    if (liItemAttributes) {
      for (const key in liItemAttributes) {
        li.setAttribute(key, liItemAttributes[key]);
      }
    }

    ul.appendChild(li);
  });

  return ul;
} // end function createListWithAttributes
/*const ul = createListWithAttributes(liName);*/

export function createListWithAttributesLink(
  liItems: { [key: string]: string | null | undefined }[]
): HTMLUListElement {
  const ul = document.createElement("ul");

  // Aggiungi gli elementi della lista (li)
  liItems.forEach((liItemAttributes) => {
    const li = document.createElement("li");

    // Aggiungi attributi agli elementi li
    if (liItemAttributes) {
      if (liItemAttributes.id) {
        li.setAttribute("id", liItemAttributes.id);
      }
      if (liItemAttributes.class) {
        li.setAttribute("class", liItemAttributes.class);
      }

      if (
        liItemAttributes.text &&
        liItemAttributes.href &&
        liItemAttributes.class
      ) {
        const a = createGenericElement(
          "a",
          { href: liItemAttributes.href },
          liItemAttributes.text
        );
        if (liItemAttributes.class) {
          a.classList.add(liItemAttributes.class);
        }
        li.appendChild(a);
      }

      if (
        liItemAttributes.text &&
        liItemAttributes.type &&
        liItemAttributes.class
      ) {
        const button = createGenericElement(
          "button",
          { type: liItemAttributes.type },
          liItemAttributes.text
        );
        if (liItemAttributes.class) {
          button.classList.add(liItemAttributes.class);
        }
        li.appendChild(button);
      }
    }

    ul.appendChild(li);
  });

  return ul;
} // end function createListWithAttributesLink

export function createNestedUL(
  tagName: string,
  attributes?: {
    class?: string;
    id?: string;
  },
  list1?: string[],
  list2?: string[],
  parentElement?: HTMLElement
) {
  // creat ul
  const ul = createGenericElement("ul", attributes, undefined, parentElement);
  // creat li and ad tu ul
  const liServieUl = createGenericElement(
    "li",
    { class: "liServieUl" },
    undefined,
    ul
  );
  const ulService = createGenericElement(
    "ul",
    undefined,
    undefined,
    liServieUl
  );
  if (list1) {
    for (const item of list1) {
      createGenericElement("li", undefined, item, ulService);
    }
  }

  const liPriceUl = createGenericElement(
    "li",
    { class: "liPriceUl" },
    undefined,
    ul
  );
  const ulPrice = createGenericElement("ul", undefined, undefined, liPriceUl);
  if (list2) {
    for (const item of list2) {
      createGenericElement("li", undefined, item, ulPrice);
    }
  }

  return ul;
} // end function createNestedUL

export function createNestedDiv(
  divNames: (string | [string, string[]])[],
  parentElement?: HTMLElement
) {
  divNames.forEach((item) => {
    if (Array.isArray(item)) {
      const [parentDivName, childDivNames] = item;
      const parentDiv = createGenericElement(
        "div",
        { id: parentDivName },
        undefined,
        parentElement
      );
      childDivNames.forEach((childDivName) => {
        createGenericElement("div", { id: childDivName }, undefined, parentDiv);
      });
    } else {
      createGenericElement("div", { id: item }, undefined, parentElement);
    }
  });
} // end function createNestedDiv

export function insertSocialProfiles(
  listSocialProf: {
    class: string;
    img: string;
    href: string;
    target: string;
  }[],
  parentID: string
) {
  const parentElement = document.getElementById(parentID);
  if (!parentElement) {
    console.error(`Element with id ${parentID} not found.`);
    return;
  }
  const ulParent = createGenericElement(
    "ul",
    { class: "ulParent" },
    undefined,
    parentElement
  );
  listSocialProf.forEach((socialProf) => {
    const liElements = createGenericElement(
      "li",
      { class: socialProf.class },
      undefined,
      ulParent
    );

    // const liElement = document.createElement("li");
    const anchorElements = createGenericElement(
      "a",
      {
        href: socialProf.href,
        target: socialProf.target,
      },
      undefined,
      liElements
    );
    const imgElements = createGenericElement(
      "img",
      {
        src: socialProf.img,
        class: socialProf.class,
      },
      undefined,
      anchorElements
    );
  });
} // end function insertSocialProfiles

export interface ElementData {
  tag: string;
  attributes?: { [key: string]: string };
  textContent?: string;
  parentId?: string;
}

export function addElemntsTuLi(elementsData: ElementData[]) {
  elementsData.forEach((data) => {
    const element = document.createElement(data.tag);

    if (data.attributes) {
      for (const key in data.attributes) {
        element.setAttribute(key, data.attributes[key]);
      }
    }

    if (data.textContent) {
      element.textContent = data.textContent;
    }

    if (data.parentId) {
      const parentElement = document.getElementById(data.parentId);
      if (parentElement) {
        parentElement.appendChild(element);
      } else {
        console.error(`Parent element with id '${data.parentId}' not found.`);
      }
    }
  });
}
