function createMenuTab() {
  const mainDiv = document.querySelector("#content");
  const menuTab = document.createElement("button");
  menuTab.classList = "menuTab";
  menuTab.textContent = "Menu";
  mainDiv.appendChild(menuTab);

  menuTab.addEventListener("click", () => {
    mainDiv.innerHTML = "";
  });
}

export default createMenuTab;
