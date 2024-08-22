import imageCustomer from "./happy-customer1.jpeg";
export default function LoadReviews() {
  const content = document.querySelector("#content");
  const image = document.createElement("img");
  image.src = imageCustomer;
  const name = document.createElement("h1");
  name.textContent = "Donald J. Trump";
  const reviewBody = document.createElement("p");
  reviewBody.textContent = `Let me tell you, folks, Opulent Bites & Play is truly a tremendous place. Absolutely fantastic. I took my grandkids there, and believe me, they loved it. The play area? Incredible—better than anything you've ever seen. It's luxurious, it's safe, and it’s filled with the best toys. And the food? Top-notch, folks. They’ve got the finest steaks, cooked perfectly—just the way I like them. The chefs there, probably the best in the world, know what they’re doing.

And the service, let me tell you, is unbelievable. They treat you like royalty, which, frankly, we deserve. The restaurant is beautiful, very classy, and everyone is saying it’s the best place to take your family. If you want to treat your kids to something special, and I mean really special, Opulent Bites & Play is the place to be. It's a winner, folks. A big, big winner.`;
  content.appendChild(name);
  content.appendChild(reviewBody);
  content.appendChild(image);
}
