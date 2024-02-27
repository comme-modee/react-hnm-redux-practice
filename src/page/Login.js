import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = () => {
    const [id, setId] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = (e) => {
        e.preventDefault();
        dispatch(authenticateAction.login(id,password))
        navigate('/')
    }
  return (
    <div className='login-form'>
        <div className="login">
            <div className="header">Login</div>
            {/* form 안에 submit타입의 button이 있다면 onClick이벤트가 아니라 onSubmit이벤트를 줘야한다. */}
            <form className="form" onSubmit={(e)=>userLogin(e)}>
                <div className='wrap'>
                    <div>
                        <p>ID</p>
                        <input id="username" type="text" name="username" required="" placeholder="Enter your ID" onChange={(e) => setId(e.target.value)}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input id="password" type="password" name="password" required="" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <button type='submit' className='login-form-btn'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login