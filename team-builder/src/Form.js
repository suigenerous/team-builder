import React, { useState, useEffect } from 'react'

function Form (props) {

const { values, update, submit } = props;
const [complete, setComplete] = useState(true)

    const onChange = evt => {
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        update(inputName, inputValue);
        setComplete(completionVerify());
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const completionVerify = () =>{
        if (values.username == '' || values.email == '' || values.role == ''){
            return true;
        }
        else{
            return false;
        }
    }

    return(
        <form className = "form-container">
            <h1>Team Form</h1>
            <div className = "addButton-container">
                <button onClick = {onSubmit} disabled = {complete}>Add Member</button>
            </div>
            <div className = "inputs-container">
                <label>Username:&nbsp;
                    <input
                        value = {values.username}
                        onChange = {onChange}
                        name='username'
                        placeholder = 'type username'
                        maxLength = '20' 
                        type ='text'
                    />
                </label>
                <label>Email:&nbsp;
                    <input
                        value = {values.email}
                        onChange = {onChange}
                        name = 'email'
                        placeholder = 'type email'
                        maxLength = '40'
                        type = 'email'
                    />
                </label>
                <label>Role:&nbsp;
                    <select
                        value = {values.role}
                        onChange = {onChange}
                        name = 'role'
                    >
                        <option value ="">Select a Role</option>
                        <option value ="intern">Intern</option>
                        <option value ="front_end_dev">Front End Developer</option>
                        <option value ="back_end_dev">Back End Developer</option>
                    </select>
                </label>
            </div>
        </form>
    )
}

export default Form