function generateHomePage() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("homePage");

  mainDiv.appendChild(createTextContent("Welcome to the best restaurant!"));
  mainDiv.appendChild(createTextContent("Browse through our menu"));

  return mainDiv;
}

function createTextContent(text) {
  const newText = document.createElement("p");
  newText.textContent = text;
  return newText;
}

function loadHome() {
  const main = document.querySelector(".mainDiv");
  main.textContent = "";
  main.appendChild(generateHomePage());
}
export default loadHome;
