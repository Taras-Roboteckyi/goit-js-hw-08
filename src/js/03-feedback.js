import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const LOCALSTORAGE_KEY = "feedback-form-state";

let dataInput = {};

function onFormInput(event) {
    dataInput[event.target.name] = event.target.value;
    //console.log(dataInput)
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataInput));
}

initForm();

function initForm() {
    let filters = localStorage.getItem(LOCALSTORAGE_KEY);
    if (filters) {
        filters = JSON.parse(filters);
        //console.log(filters);
        Object.entries(filters).forEach(([name, value]) => {
           // console.log(refs.form.elements);
            dataInput[name] = value;
            refs.form.elements[name].value = value;
        })
        
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(dataInput)
    localStorage.removeItem(LOCALSTORAGE_KEY);
    event.currentTarget.reset();
    refs.form.removeEventListener('submit', onFormSubmit);
   // console.log(refs.form);
}