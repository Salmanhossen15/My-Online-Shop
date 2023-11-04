import "./CSS/LoginSignUp.css"

export const LoginSignup = () => {
  return (
    <div className="loginSignUp">
      <div className="loginSignUpContainer">
        <h1>Sign Up</h1>
        <div className="loginSignUpField">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>

        </div>
        <button>Continue</button>
        <p className="loginSignUp-login">Already Have An Account? <span>Login</span> </p>
        <div className="loginSignUp-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to use the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
