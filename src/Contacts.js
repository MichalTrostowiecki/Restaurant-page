function createContacts() {
  const contacts = document.createElement("div");
  contacts.classList.add("contacts-div");

  const tel = document.createElement("p");
  tel.textContent = "020 17823541";
  const email = document.createElement("p");
  email.textContent = "misiek@gmail.com";

  contacts.appendChild(tel);
  contacts.appendChild(email);

  return contacts;
}

function loadContacts() {
  const main = document.querySelector(".mainDiv");
  main.textContent = "";
  main.appendChild(createContacts());
}

export default loadContacts;
