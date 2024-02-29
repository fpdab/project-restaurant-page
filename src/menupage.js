function men() {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h1.textContent = `This is some menupage`;
  h2.textContent = `Hello`;
  div.appendChild(h1);
  div.appendChild(h2);
  return div;
}
export default men;
