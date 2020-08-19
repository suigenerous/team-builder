import React, {useState} from 'react';
import logo from './logo.svg';
import Form from './Form'
import { v4 as uuid } from 'uuid'
import './App.css';
import Members from './Members'

const initialFormValues = {
  username: '',
  email: '',
  role: ''
}

const initialMembersList = [];

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [membersList, setMembersList] = useState(initialMembersList)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue });
  }

  function submitForm(){
    const member = {
      username: formValues.username,
      email: formValues.email,
      role: formValues.role,
    }
    return setMembersList([member, ...membersList]);
  }

  return (
    <div className="App">
      <Form values = {formValues} update = {updateForm} submit = {submitForm}/>
      <Members membersList = {membersList}/>
    </div>
  );
}

export default App;
