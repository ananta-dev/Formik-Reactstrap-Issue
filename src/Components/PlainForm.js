// This is a React component
import { useFormik } from 'formik';
import './PlainForm.css';

const PlainForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {
            alert(`Plain form submitted with name: ${values.name}`);
        },
    });

    return (
        <div className='plain-form-container'>
            <h1>Plain Form</h1>
            <form
                className='baseForm'
                onSubmit={formik.handleSubmit}
                noValidate
            >
                <label htmlFor='plain-form-name'>Name:</label>
                <input
                    type='text'
                    id='plain-form-name'
                    className='nameField'
                    placeholder='Enter your name here'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default PlainForm;
