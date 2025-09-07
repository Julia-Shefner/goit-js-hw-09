const formData = {
    email: "",
    message: "",
}
const localStorageKey = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handlerInput);

populateFields();

function handlerInput(event){
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

function populateFields() {
    const fields = localStorage.getItem(localStorageKey);
    if(fields) {
       const parsedFields = JSON.parse(fields);
       form.elements.email.value = parsedFields.email;
       form.elements.message.value = parsedFields.message;
    }
};

form.addEventListener('submit', handlerSubmit);

function handlerSubmit (event) {
    event.preventDefault();
    const elements = event.target.elements;
    if(elements.email.value === "" || elements.message.value === ""){
        alert('Fill please all fields');
        return;
    }
  event.target.reset();
  localStorage.removeItem(localStorageKey);
};