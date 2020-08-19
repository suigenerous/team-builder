import React, {useState} from 'react';
import logo from './logo.svg';
import Form from './Form'
import { v4 as uuid } from 'uuid'
import './App.css';
import Members from './Members'

const initialFormValues = {
  id: '',
  username: 'default',
  email: 'default@default.com',
  role: 'default'
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">
      <Form/>
      <Members/>
    </div>
  );
}

export default App;
