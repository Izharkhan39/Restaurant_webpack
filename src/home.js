import img1 from "./assests/images/Foods/Dish1.avif";
import img2 from "./assests/images/Foods/dish2.avif";
import img3 from "./assests/images/Foods/dish3.avif";
import img4 from "./assests/images/Foods/dish4.avif";
import img5 from "./assests/images/Foods/dish5.avif";

import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

function createHome(parentElement) {
  const gallery = document.createElement("div");
  const homeBtn = document.querySelector("#homeBtn");
  homeBtn.classList.add("active");
  gallery.classList.add("gallery");

  const images = [img1, img2, img3, img4, img5];

  images.forEach((src) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Dish photo";
    img.loading = "lazy";

    imgWrapper.appendChild(img);
    gallery.appendChild(imgWrapper);
  });

  parentElement.appendChild(gallery);

  // Initialize Masonry after images load
  const imgLoad = imagesLoaded(gallery);
  imgLoad.on("done", () => {
    new Masonry(gallery, {
      itemSelector: ".gallery-item",
      columnWidth: 300,
      gutter: 15,
      fitWidth: true,
    });
  });

  return gallery;
}
export { createHome };
