document.addEventListener("DOMContentLoaded", () => {
  function validateEmail(event) {
    if (
      !event.target.value.match(/\w+@[a-zA-Z]{1,}.com.br/) &&
      !event.target.value.match(/\w+@[a-zA-Z]{1,}.br/) &&
      !event.target.value.match(/\w+@[a-zA-Z]{1,}.com/)
    ) {
      console.log("Email is invalid");
      //send toast error message
    }
  }

  function formatPhone(event) {
    let phone = event.target.value.trim().replace(/\D/gi, "");
    //Tive que colocar isso para validar o backspace
    //Mas só de colocar isso resolveu o problema,
    //não precisei fazer validação
    document.addEventListener("keypress", (keyEvent) => {
      //quando o usuario tiver já digitado 2 digitos estou tirando os dois digitos
      //salvando na captura de grupo e pegando de volta com a format string nativo do
      //javascript $1 e colocando ele dentro dos parenteses => ($1)
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
      event.target.value = phone;
    });
    if (phone.match(/\(\d{2}\)\s\d{5}-\d{4}\d+/)) {
      event.target.value = phone.replace(
        /(\(\d{2}\))\s(\d{5}-)(\d{4})\d+/,
        "$1 $2$3"
      );
    }
  }

  function isPhoneValid(event) {
    if (!isPhoneMatch(event.target.value)) {
      //send toast error message
      console.log("the format phone isnt matching!");
    }
  }

  function isPhoneMatch(value) {
    return value.match(/\(\d{2}\)\s\d{5}-\d{4}/);
  }
  const tagPhone = document.getElementById("phone");
  const tagEmail = document.getElementById("email");
  tagEmail.addEventListener("blur", validateEmail);
  tagPhone.addEventListener("input", formatPhone);
  tagPhone.addEventListener("blur", isPhoneValid);
});
