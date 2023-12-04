"use client"
import LoginForm from "../components/LoginForm";
import '../styles/login.css';

export default function Login() {
  return (
    <div className="main">
      <div className="circle"></div>
      <img className="loginImg" src="https://imgs.search.brave.com/TkP7SO9lYqXbd1A3ZiTE0WdOdKFzzOV3Tq5JLaKkM1Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvbG9naW4t/MzMwNTk0My0yNzU3/MTExLnBuZz9mPXdl/YnA" alt="Login Illustration"/>
      <LoginForm />
    </div>
  )
}
