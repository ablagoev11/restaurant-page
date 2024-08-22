export default function LoadMenu() {
  const content = document.querySelector("#content");

  const name = document.createElement("h1");
  name.textContent = "ERROR!!";
  const text = document.createElement("p");
  text.textContent = `ERROR!`;
  content.appendChild(name);
  content.appendChild(text);
}
