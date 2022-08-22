import loadHome from "./Home";
import loadMenu from "./Menu";
import loadContacts from "./Contacts";

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
  navDiv.classList.add("header-btn");

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
    loadMenu();
  });

  const contactsTab = document.createElement("button");
  contactsTab.classList.add("nav-btn");
  contactsTab.setAttribute("id", "contactsTab");
  contactsTab.textContent = "Contacts";
  contactsTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveTab(contactsTab);
    loadContacts();
  });

  navDiv.appendChild(homeTab);
  navDiv.appendChild(menuTab);
  navDiv.appendChild(contactsTab);
  headerDiv.appendChild(navDiv);

  return headerDiv;
}

function setActiveTab(button) {
  const allTabs = document.querySelectorAll(".nav-btn");

  allTabs.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function loadUpWebsite() {
  const contentDiv = document.getElementById("content");

  contentDiv.appendChild(createHeader());
  contentDiv.appendChild(createNavBar());
  contentDiv.appendChild(createMainDiv());

  setActiveTab(homeTab);
  loadHome();
}

export default loadUpWebsite;
