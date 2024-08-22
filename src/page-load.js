import restaurantImage from "./restaurant.jpeg";

export default function InitialPageLoad() {
  const content = document.querySelector("#content");
  const image = document.createElement("img");
  image.src = restaurantImage;
  const heading = document.createElement("h1");
  heading.textContent = `Opulent Bites & Play`;
  const text = document.createElement("p");
  text.textContent = `This exclusive family-friendly restaurant caters to the world's elite,
        offering a luxurious dining experience where billionaires can indulge in
        gourmet cuisine while their children enjoy a private, state-of-the-art
        play area. The restaurant features a menu crafted by Michelin-starred
        chefs, with dishes made from the finest ingredients sourced globally.
        The interior is a blend of elegance and whimsy, with custom-made
        furniture and interactive art installations that captivate both adults
        and kids. With impeccable service, personalized menus for children, and
        discreet security, Opulent Bites & Play ensures an unforgettable
        experience for the whole family.`;
  content.appendChild(heading);
  content.appendChild(text);
  content.appendChild(image);
}
