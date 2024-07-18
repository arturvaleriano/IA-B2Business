function sendToastMessage(message, elementID, error) {
  const element = document.querySelector(elementID);
  const divContainer = document.createElement("div");
  const messageError = document.createTextNode(message);
  divContainer.appendChild(messageError);
  divContainer.style = `
  ${modelsColors[error]}
    margin: 0 var(--margin-default) 1rem;
    padding: 8px; 
    position: absolute;
    right: 0;
    bottom: 0;
    animation: toastMessageTemp 4s 1;
    transform: translate(100rem, 0);
    border: solid 1px var(--bs-green);
    border-radius: 1rem;
    `;

  element.appendChild(divContainer);
}

sendToastMessage("Message Error!", "#form-data", Constants.error);
