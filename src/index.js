import hom from "./homepage";
import men from "./menupage";
import abo from "./aboutpage";
import clea from "./clearpage";

const content = document.querySelector("#content");
const homeBut = document.querySelector(".homeBut");
homeBut.addEventListener("click", () => {
  clea(content);
  content.appendChild(hom());
});
const menuBut = document.querySelector(".menuBut");
menuBut.addEventListener("click", () => {
  clea(content);
  content.appendChild(men());
});
const aboutBut = document.querySelector(".aboutBut");
aboutBut.addEventListener("click", () => {
  clea(content);
  content.appendChild(abo());
});
