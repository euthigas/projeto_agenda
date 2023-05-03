const form = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");

function addContact() {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");

  if (nameInput.checkValidity() && phoneInput.checkValidity()) {
    const contact = {
      name: nameInput.value,
      phone: phoneInput.value,
    };

    const li = document.createElement("li");
    li.textContent = `${contact.name} - ${contact.phone}`;
    contactList.appendChild(li);

    form.reset();
  }

  return false;
}
