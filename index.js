// button

let form = document.querySelector("form");

// event

form.addEventListener("submit", validate);

// function

function validate(e) {
  let values = [e.target[0].value, e.target[1].value];
  if (values[0] == 1) {
    v_email(values);
  } else if (values[0] == 2) {
    v_postcode(values);
  } else if (values[0] == 3) {
    v_phone(values);
  }

  e.preventDefault(); // preventing from default form loading
}

function v_email(values) {
  let [, input] = values;
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let result = re.test(input);
  document.querySelector("#input").value = "";
  alert(`validation: ${result}`);
}

function v_postcode(values) {
  let [, input] = values;
  let re = /^[0-9]{4}$/;
  let result = re.test(input);
  document.querySelector("#input").value = "";
  alert(`validation: ${result}`);
}

function v_phone(values) {
  let [, input] = values;
  let re = /^(\+8801)?(01)?(8801)?([0-9]){9}$/;
  let result = re.test(input);
  document.querySelector("#input").value = "";
  alert(`validation: ${result}`);
}
