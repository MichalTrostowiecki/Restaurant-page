function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu-container");
  mainDiv.appendChild(menu);
  createMenuItem();

  const foods = [
    createMenuItem(
      "Lemon Cod",
      "This is just some random description how to prep this meal",
      "meal1.jpg"
    ),
    createMenuItem(
      "Shrimp soup",
      "This is just some random description how to prep this meal",
      "meal2.jpg"
    ),
    createMenuItem(
      "Rice with Eggs",
      "This is just some random description how to prep this meal",
      "meal3.jpg"
    ),
    createMenuItem(
      "Salad Bowl",
      "This is just some random description how to prep this meal",
      "meal4.jpg"
    ),
  ];
  foods.forEach((food) => {
    menu.appendChild(food);
  });

  return menu;
}

function createMenuItem(name, description, imageNumber) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menuItem");
  const foodName = document.createElement("h2");
  foodName.textContent = name;
  const foodDescription = document.createElement("h4");
  foodDescription.textContent = description;
  const foodPicture = document.createElement("img");
  foodPicture.alt = "food";
  foodPicture.src = `../assets/${imageNumber}`;
  foodPicture.style.height = "20vh";
  foodPicture.style.width = "15vw";

  menuItem.appendChild(foodName);
  menuItem.appendChild(foodPicture);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.querySelector(".mainDiv");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
