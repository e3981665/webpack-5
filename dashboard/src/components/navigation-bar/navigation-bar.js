import "./navigation-bar.scss";

class NavigationBar {
  render(navigationItens) {
    const list = navigationItens.map((navigationItens) => {
      return `
          <li>
            <a href="${navigationItens.url}">${navigationItens.title}</a>
          </li>
          `;
    });
    const ul = document.createElement("ul");
    ul.innerHTML = list.join("");
    ul.classList.add("navigation-bar");
    document.querySelector("body").appendChild(ul);
  }
}

export default NavigationBar;
