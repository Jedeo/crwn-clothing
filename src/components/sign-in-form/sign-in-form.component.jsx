import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

const SignInDefaultFields = { email: "", password: "" };
const SignInForm = () => {
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
   
  };

  const [signIn, setSignIn] = useState(SignInDefaultFields);
  const { email, password } = signIn;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const restFormFields = () => {
    setSignIn(SignInDefaultFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      restFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sing-in-container">
      <h1>I already have an account</h1>
      <p>Sign in with your email and password</p>
      <form className="sing-up-form" onSubmit={handleSubmit}>
        <FormInput
          required
          value={email}
          type="email"
          label="Email"
          name="email"
          onChange={handleChange}
        />

        <FormInput
          required
          value={password}
          type="password"
          label="Password"
          name="password"
          onChange={handleChange}
        />

        {/* button not showing on screen */}

        <div className="buttons-container">
          <Button type="submit"> SIGN In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google sing in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
