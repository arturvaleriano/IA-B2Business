const divArray = [];

function sendToastMessage(message, elementID, error) {
  const element = document.querySelector(elementID);

  const divMessage = document.createElement("div");
  divMessage.id = "random";

  const messageError = document.createTextNode(message);
  divMessage.appendChild(messageError);
  divMessage.style = `
    ${modelsColors[error]}
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0 var(--margin-default) 1rem;
    padding: 8px;
    animation: toastMessageTemp 5s 1;
    transform: translate(100rem, 0);
    border: solid 2px var(--bs-green);
    border-radius: 1rem;
    `;
  let oldDiv = null;

  if (divArray.length !== 0) {
    oldDiv = divArray.shift();
    element.removeChild(oldDiv);
  }

  divArray.push(divMessage);
  element.appendChild(divArray[0]);
}
