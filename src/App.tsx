import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  const [currentUser , setCurrentUser] = useState(null)

  function singIn(user){
    setCurrentUser(user)
  }

  function singOut(){
    setCurrentUser(null)
  }

  return (
    <div className="App">
      {currentUser ? (<h1>Welcome back , { currentUser.email } ! </h1>
      ) : (
        <h1>Welcome!</h1>
      )}
      <form onSubmit={e => {
        e.preventDefault()
        fetch(`http://localhost:3456/sign-up`) ,{
          method : 'POST' ,
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            email : target.email.value ,
            password : e. target.password.value
          })
        } .then(res => res.json())
        .then(user => singIn(user))
          
      }}>
        <h2>Sign up</h2>
        <label>
          <h2>Email</h2>
        <input type="email" name='email' required />
        </label>
        <label>
          <h2>Password</h2>
        <input type="password" name="password" required />
        </label>
        <button>Sign up</button>
      </form>

      <form>
        <h2>Sign in</h2>
        <label>
          <h2>Email</h2>
        <input type="email" name='email' required />
        </label>
        <label>
          <h2>Password</h2>
        <input type="password" name="password" required />
        </label>
        <button>Sign in</button>
      </form>
    </div>
  )
}

export default App
