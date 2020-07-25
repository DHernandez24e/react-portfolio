import React, { useState } from 'react';

function ContactForm() {
    //Form State when load
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    //Error message State
    const [errorMessage, setErrorMessage] = useState('');
    //Destructured formState
    const { name, email, message } = formState;
    //Function to handle email verification
    function validateEmail(email) {
        var res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
    };
    //Function to handle change in forms
    function handleChange(evt) {
        if (evt.target.name ===  'email') {
            const isValid = validateEmail(evt.target.value);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid, please enter a valid email.')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!evt.target.value.length) {
                setErrorMessage(`${evt.target.name} is required.`)
            } else {
                setErrorMessage('')
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [evt.target.name]: evt.target.value });
        }
    };
    //Function to handle submission
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formState);
        alert('Thank you for submitting!');
    }

    return(
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;