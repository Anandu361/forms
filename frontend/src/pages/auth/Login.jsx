import React from 'react'


function Login() {
  return (
    <div className='container'>
      <h1>Login</h1>
      <div className='border-2'>
        <form action="">
          <div className=''>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div><button type="submit">Login</button></div>
        </form>
      </div>
    </div>
  )
}

export default Login
