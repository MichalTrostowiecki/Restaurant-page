import loadHome from "./Home";

function createMainDiv() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("mainDiv");
  mainDiv.setAttribute("id", "mainDiv");

  return mainDiv;
}

function createHeader() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerDiv");
  headerDiv.setAttribute("id", "headerDiv");

  const resName = document.createElement("h1");
  resName.classList.add("resName");
  resName.textContent = "Bawario";
  headerDiv.appendChild(resName);

  return headerDiv;
}

function createNavBar() {
  const navDiv = document.createElement("div");

  const homeTab = document.createElement("button");
  homeTab.classList.add("nav-btn");
  homeTab.setAttribute("id", "homeTab");
  homeTab.textContent = "Home";
  homeTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveTab(homeTab);
    loadHome();
  });

  const menuTab = document.createElement("button");
  menuTab.classList.add("nav-btn");
  menuTab.setAttribute("id", "menuTab");
  menuTab.textContent = "Menu";
  menuTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveTab(menuTab);
  });

  const contactsTab = document.createElement("button");
  contactsTab.classList.add("nav-btn");
  contactsTab.setAttribute("id", "contactsTab");
  contactsTab.textContent = "Contacts";
  contactsTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveTab(contactsTab);
  });

  navDiv.appendChild(homeTab);
  navDiv.appendChild(menuTab);
  navDiv.appendChild(contactsTab);

  return navDiv;
}

function setActiveTab(button) {
  const allTabs = document.querySelectorAll(".nav-btn");

  allTabs.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  // this throws me an error
  // button.classList.add("active");
}

function loadUpWebsite() {
  const contentDiv = document.querySelector("#content");

  contentDiv.appendChild(createHeader());
  contentDiv.appendChild(createNavBar());
  contentDiv.appendChild(createMainDiv());
  setActiveTab();
  loadHome();
}

export default loadUpWebsite;