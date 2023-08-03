const textElement = document.documentElement.querySelector(".text");
textElement.style.setProperty(
  "--textLength",
  textElement.innerHTML.length ?? 0
);
