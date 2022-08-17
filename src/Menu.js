function createMenuTab() {
  const mainDiv = document.querySelector("#content");
  const menuTab = document.createElement("button");
  menuTab.classList = "menuTab";
  menuTab.textContent = "Menu";
  mainDiv.appendChild(menuTab);

  menuTab.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    createMenu();
  });

  function createMenu() {
    const menu = document.createElement("div");
    const menuItem = document.createElement("div");
    menu.classList.add("menu-container");
    menuItem.classList.add("menuItem");
    mainDiv.appendChild(menu);
    menu.appendChild(menuItem);
    createMenuItem();
    return menu;
  }

  function createMenuItem(name, description, menu) {
    console.log(menu);
  }
}

export default createMenuTab;
