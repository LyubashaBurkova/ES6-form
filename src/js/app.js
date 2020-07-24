import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.cofig';
import {validate} from './helpers/validate';
import {showInputError, removeInputError} from './views/form';

const {form, inputName, inputEmail, inputPhone} = UI;
const inputs = [inputName, inputEmail, inputPhone];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit();
})

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)))

function onSubmit(){
    const isValidate = inputs.every(el => {
        
        
        debugger
        const isValidInput = validate(el);
        if(!isValidInput){
            showInputError(el)
        }
        console.log('isValidInput', isValidInput)
        return isValidInput;
    })
}