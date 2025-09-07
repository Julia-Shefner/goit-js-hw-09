const formData = {
    email: "",
    message: "",
}
const localStorageKey = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handlerInput);

function handlerInput(event){
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

function populateFields() {
    const fields = JSON.parse(localStorage.getItem(localStorageKey));
    if (!fields) return;
    for (const key in fields) {
        formData[key] = fields[key];
        form.elements[key].value = fields[key];
    }
};
populateFields();

form.addEventListener('submit', handlerSubmit);

function handlerSubmit (event) {
    event.preventDefault();
    const elements = event.target.elements;
    if(elements.email.value === "" || elements.message.value === ""){
        alert('Fill please all fields');
        return;
    }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  event.target.reset();
  formData.email = "";
  formData.message = "";
};