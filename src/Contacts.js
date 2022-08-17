function createContactUsTab() {
  const mainDiv = document.querySelector("#content");
  const ContactUsTab = document.createElement("button");
  ContactUsTab.classList = "ContactUsTab";
  ContactUsTab.textContent = "Contact Us";
  mainDiv.appendChild(ContactUsTab);

  ContactUsTab.addEventListener("click", () => {
    mainDiv.innerHTML = "";
  });
}

export default createContactUsTab;
