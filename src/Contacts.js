function createContacts() {
  const contacts = document.createElement("div");
  contacts.classList.add("contacts-div");

  const tel = document.createElement("p");
  tel.textContent = "020 17823541";
  const email = document.createElement("p");
  email.textContent = "somerandom@gmail.com";
  const text = document.createElement("p");
  text.textContent =
    "If you would like to contact us, please do not hesitate. Use our telephone number below or simply just email us. We will get back to you shortly!";

  contacts.appendChild(text);
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
