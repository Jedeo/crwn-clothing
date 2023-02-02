import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss"

const SignInDefaultFields = { email: "", password: "" };
const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const [signIn, setSignIn] = useState(SignInDefaultFields);
  const { email, password } = signIn;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };
  return (
    <div>
      <h1>I already have an account</h1>
      <p>Sign in with your email and password</p>
      <form onSubmit={() => ""}>
        <FormInput
          value={email}
          type="text"
          label="email"
          name="email"
          onChange={handleChange}
        />
        <FormInput
          value={password}
          type="password"
          label="password"
          name="password"
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit"> Sign in </Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            Google sing in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
