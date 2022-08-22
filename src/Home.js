function generateHomePage() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("homePage");

  mainDiv.appendChild(createTextContent("Welcome to the best restaurant!"));
  mainDiv.appendChild(
    createTextContent(
      "If you're looking for a freshly made, delicious food you could not find a better place.Browse through our lovely menu and find something for yourself!"
    )
  );

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
