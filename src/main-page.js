function generateMainContent() {
  const mainDiv = document.querySelector("#content");
  console.log(mainDiv);

  const background = document.createElement("img");
  background.src = "../assets/mainpage.jpg";
  background.alt = "background-picture";

  const mainText = document.createElement("p");
  mainText.textContent = "Welcome to the best restaurant!";

  const mainText2 = document.createElement("p");
  mainText2.textContent = "Browse through our menu";

  mainDiv.appendChild(background);
  mainDiv.appendChild(mainText);
  mainDiv.appendChild(mainText2);
}

export default generateMainContent;
