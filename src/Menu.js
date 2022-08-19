function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu-container");
  mainDiv.appendChild(menu);
  createMenuItem();

  const foods = [
    createMenuItem("kasza manna", "ugotuj kasze"),
    createMenuItem("jajko na twardo", "ugotuj jajka"),
  ];
  foods.forEach((food) => {
    menu.appendChild(food);
  });

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menuItem");
  const foodName = document.createElement("h1");
  foodName.textContent = name;
  const foodDescription = document.createElement("h4");
  foodDescription.textContent = description;

  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);
  return menuItem;
}

function loadMenu() {
  const main = document.querySelector(".mainDiv");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
