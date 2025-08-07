import "./styles.css";
import "./assests/images//AntonsLogo.png";
import { createHome } from "./home";
import { openMenuContent } from "./menu";
import { openAboutContent } from "./about";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const content = document.querySelector("#content");

createHome(content);

homeBtn.addEventListener("click", () => {
  clearContent();
  createHome(content);
  homeBtn.classList.add("active");
});
menuBtn.addEventListener("click", () => {
  clearContent();
  openMenuContent(content);
  menuBtn.classList.add("active");
});
aboutBtn.addEventListener("click", () => {
  clearContent();
  openAboutContent(content);
  aboutBtn.classList.add("active");
});

function clearContent() {
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  content.innerHTML = "";
}
