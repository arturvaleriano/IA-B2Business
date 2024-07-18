const divContainerFlex = document.createElement("div");
  divContainerFlex.style = `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column wrap;
    position: absolute;
    right: 0;
    bottom: 0;
  `;

function sendToastMessage(message, elementID, error) {
  const element = document.querySelector(elementID);
  
  const divMessage = document.createElement("div");
  
  const messageError = document.createTextNode(message);
  divMessage.appendChild(messageError);
  divMessage.style = `
  ${modelsColors[error]}
    margin: 0 var(--margin-default) 1rem;
    padding: 8px;
    animation: toastMessageTemp 4s 1;
    transform: translate(100rem, 0);
    border: solid 1px var(--bs-green);
    border-radius: 1rem;
    `;
  divContainerFlex.appendChild(divMessage);
  setTimeout(()=> {
    divContainerFlex.removeChild(divMessage);
  }, 4500);
  element.appendChild(divContainerFlex);
}
