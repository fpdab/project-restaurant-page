export default function clea(content) {
  while (content.firstChild) {
    content.firstChild.remove();
  }
}
