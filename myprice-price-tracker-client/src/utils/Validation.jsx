export const isValidEmail = (value) => {
  const emailRegex =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
  const emailPattern = new RegExp(emailRegex);
  const stringValue = String(value).toLowerCase();

  if (emailPattern.test(stringValue)) return true;
  else return false;
};

export const isValidURL = (value) => {
  const urlRegex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  const urlPattern = new RegExp(urlRegex);

  if (urlPattern.test(value)) return true;
  else return false;
};

const setError = (element, msg) => {
  const formInputs = [...document.querySelectorAll(".form-input")];

  let input = formInputs.filter((formInput) => {
    return formInput.querySelector(`#${element}`);
  });
  input[0].classList.add("error");
  input[0].querySelector("span").textContent = msg;
};

const unsetError = (element) => {
  const formInputs = [...document.querySelectorAll(".form-input")];

  let input = formInputs.filter((formInput) => {
    return formInput.querySelector(`#${element}`);
  });

  input[0].classList.remove("error");
  input[0].querySelector("span").textContent = "";
};

export const checkURL = (msg) => {
  const element = document.querySelector("#product-url");
  if (!isValidURL(element.value)) {
    setError(element.id, msg);
  } else {
    unsetError(element.id);
  }
};

export const checkName = (msg) => {
  const element = document.querySelector("#product-name");
  if (element.value === "") {
    setError(element.id, msg);
  } else {
    unsetError(element.id);
  }
};

export const checkPrice = (msg) => {
  const element = document.querySelector("#target-price");
  if (element.value === "") {
    setError(element.id, msg);
  } else {
    unsetError(element.id);
  }
};

export const checkEmail = (msg) => {
  const element = document.querySelector("#alert-email");
  if (!isValidEmail(element.value)) {
    setError(element.id, msg);
  } else {
    unsetError(element.id);
  }
};
