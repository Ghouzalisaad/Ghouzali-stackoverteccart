import React , {useState }from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login'
import Singin from './components/singin'

function App () { const [currentForm , setCurrentForm ] = useState('login');
    const toggleForm = (NameForm) => {
      setCurrentForm(NameForm);
    }

    return (
    <div className='container'>
      { currentForm === 'login' ? 
      <Login onFormSwitch = {toggleForm } /> : 
      <Singin onFormSwitch = {toggleForm}  />
      }
    </div>
    
  )
  
}

export default App
