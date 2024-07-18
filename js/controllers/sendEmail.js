const userRequest = new UserRequest();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-data");

  function sendEmail(event) {
    event.preventDefault();

    const formData = new FormData(form);
    formData.forEach((value, key) => {
      userRequest[key] = value;
    });
    console.log(userRequest);
  }

  form.addEventListener("submit", sendEmail);
});
