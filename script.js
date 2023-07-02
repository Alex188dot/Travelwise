const contactModal = document.getElementById("contactModal");
if (contactModal) {
  contactModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const modalTitle = contactModal.querySelector(".modal-title");
    const modalBodyInput = contactModal.querySelector(".modal-body input");

    modalTitle.textContent = `New message`;
    modalBodyInput.value = "";
  });
}
