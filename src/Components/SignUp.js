import React,{useRef,useCallback} from 'react'
import "./SignUp.css"
const SignUp = props => {

  const fullNameInputElement = useRef();
  const emailInputElement = useRef();
  const passwordInputElement = useRef();
  const passwordConfirmationInputElement = useRef();

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        fullName: fullNameInputElement.current?.value,
        email: emailInputElement.current?.value,
        password: passwordInputElement.current?.value,
        passwordConfirmation: passwordConfirmationInputElement.current?.value
      };

      console.log(data);
    },
    []
  );

  return (
    <div className='main_signup_div'>
      <div className='form_container'>
      <h1 >Signup</h1>
        <form className='form_div'  onSubmit={formHandler()}>
          <div >
            <label
              htmlFor="full_name"
            >
              Full name
            </label>
            <input
              ref={fullNameInputElement}
              id="full_name"
              placeholder=""
              type="text"
            />
          </div>
          <div >
            <label
              htmlFor="email"
            >
              Email
            </label>
            <input
              ref={emailInputElement}
              id="email"
              placeholder=""
              type="email"
            />
          </div>
          <div >
            <label
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={passwordInputElement}
              id="password"
              placeholder=""
              type="password"
            />
          </div>
          <div >
            <label
              htmlFor="password_confirmation"
            >
              Password Confirmation
            </label>
            <input
              ref={passwordConfirmationInputElement}
              id="password_confirmation"
              placeholder=""
              type="password"
            />
          </div>
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
        </div>
    </div>
  )
}

SignUp.propTypes = {}

export default SignUp