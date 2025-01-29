import {useState} from 'react';   
const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const onInputChangue = ({target}) => {
        const {value, name} = target;
        setFormState({...form, [name]: value});
    }
    const onResetForm = () => {
        setFormState(initialForm);
    }
    return {
        ...formState,
        formState,
        onInputChangue,
        onResetForm,
    }
}
export default useForm;

