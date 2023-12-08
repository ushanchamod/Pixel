import { useState } from 'react';
import './login.scss'
import TextInput from '../../../components/inputs/textInput/TextInput';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div id='login-container'>
      <div className="login">
        <h2 className='title'>LOGIN</h2>
        <form>
          <TextInput type='text' id='login-username' label='User Name' />
        
        
        </form>
      </div>
    </div>
  )
}

export default Login