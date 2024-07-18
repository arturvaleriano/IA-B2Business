document.addEventListener("DOMContentLoaded", () => {
  function validateEmail(event) {
    if (
      !event.target.value.match(/\w+@[a-zA-Z]{1,}.com.br/) &&
      !event.target.value.match(/\w+@[a-zA-Z]{1,}.br/) &&
      !event.target.value.match(/\w+@[a-zA-Z]{1,}.com/)
    ) {
      console.log("Email is invalid");
      //send toast error message
      sendToastMessage(
        `Email inserido está invalido. Por favor verifique e tente novamente`,
        "#form-data",
        Constants.error
      );
    }
  }

  const tagPhone = document.getElementById("phone");
  const tagEmail = document.getElementById("email");

  //Tive que colocar isso para validar o backspace
  //Mas só de colocar isso resolveu o problema,
  //não precisei fazer validação
  tagPhone.addEventListener("input", (inputEvent) => {
    document.addEventListener("keypress", (keyEvent) => {
      //quando o usuario tiver já digitado 2 digitos estou tirando os dois digitos
      //salvando na captura de grupo e pegando de volta com a format string nativo do
      //javascript $1 e colocando ele dentro dos parenteses => ($1)
      let phone = inputEvent.target.value.trim().replace(/\D/gi, "");

      phone =
        phone.match(/\d{2}/) !== null
          ? phone.replace(/(\d{2})/, "($1) ")
          : phone;

      phone =
        phone.match(/\(\d{2}\)\s\d{5}/) !== null
          ? phone.replace(/(\(\d{2}\))\s(\d{5})/, "$1 $2-")
          : phone;
      phone =
        phone.match(/\(\d{2}\)\s\d{5}-\d{4}\d+/) !== null
          ? phone.replace(/(\(\d{2}\))\s(\d{5}-)(\d{4})\d+/, "$1 $2$3")
          : phone;
      inputEvent.target.value = phone;
    });
  });

  function isPhoneValid(event) {
    if (!isPhoneMatch(event.target.value)) {
      //send toast error message
      console.log("the format phone isnt matching!");
      sendToastMessage(
        `Numero de WhatsApp está invalido. Por favor, verifique e tente novamente!`,
        "#form-data",
        Constants.error
      );
    } else {
      event.target.value = event.target.value.replace(
        /(\(\d{2}\))\s(\d{5}-)(\d{4})\d+/,
        "$1 $2$3"
      );
    }
  }

  function isPhoneMatch(value) {
    return value.match(/\(\d{2}\)\s\d{5}-\d{4}/);
  }
  tagEmail.addEventListener("blur", validateEmail);
  tagPhone.addEventListener("blur", isPhoneValid);
});
