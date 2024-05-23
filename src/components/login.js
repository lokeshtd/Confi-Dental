import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function login() {
  return (
    <div className='wrapper'>
        <div className="login">
        <h2>Login</h2>
        <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input type='email'></input>
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password'></input>
        </div>
        <div>
            <button type='sumbit' className='login-button'>Sign In</button>
        </div>
        </div>
    </div>
  )
}

export default login