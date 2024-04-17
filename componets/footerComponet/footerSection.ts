export function createFooter(page: HTMLElement) {
  const footer = document.createElement("footer");
  footer.className = "footer";
  page.appendChild(footer);

  const h6Footer = document.createElement("h6");
  h6Footer.innerText = "Footer";
  footer.appendChild(h6Footer);
}

// export default createFooter;
