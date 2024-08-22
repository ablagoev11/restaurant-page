import InitialPageLoad from "./page-load";
import LoadReviews from "./reviews-load";
import LoadMenu from "./menu-load";

const navbar = document.querySelector(".navbar");
const content = document.querySelector("#content");
InitialPageLoad();
navbar.addEventListener("click", function (e) {
  const source = e.target;
  if (source != this) {
    const id = source.id;
    removeChildren(content);
    switch (id) {
      case "home":
        InitialPageLoad();
        break;
      case "menu":
        LoadMenu();
        break;
      case "reviews":
        LoadReviews();
        break;
    }
  }
});

const removeChildren = (node) => {
  while (node.hasChildNodes()) node.removeChild(node.firstChild);
};
