import "./sign-up-form.styles.scss";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassWord: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassWord } = formField;
  const [checkPassword, setCheckPassword] = useState({
    message: "",
    color: "black",
  });

  const resetForm = () => {
    setFormField(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formField.password !== formField.confirmPassWord) {
      const isPasswordTheSame = { ...checkPassword };
      isPasswordTheSame.message = "password does not match";
      isPasswordTheSame.color = "red";
      return setCheckPassword({
        ...checkPassword,
        ["message"]: "password does not match",
      });
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      const isPasswordTheSame = { ...checkPassword };
      isPasswordTheSame.message = error.code;
      console.log("user creation encounter an err", error.code);
      setCheckPassword(isPasswordTheSame);
    }
    // console.log(newUser);
  };
  return (
    <div className="sign-up-container">
      <h2>Don't Have an Account</h2>
      <span> sign up with your email and password</span>
      <form className="sing-up-form" onSubmit={handleSubmit}>
        <FormInput
          required
          value={formField.displayName}
          type="text"
          label="Display Name"
          name="displayName"
          onChange={handleChange}
        />

        <FormInput
          required
          value={formField.email}
          type="email"
          label="Email"
          name="email"
          onChange={handleChange}
        />

        <FormInput
          style={{ borderColor: checkPassword.color }}
          required
          value={formField.password}
          type="password"
          label="Password"
          name="password"
          onChange={handleChange}
        />

        <FormInput
          style={{ borderColor: checkPassword.color }}
          required
          value={formField.confirmPassWord}
          type="password"
          label="Confirm Password"
          name="confirmPassWord"
          onChange={handleChange}
        />
        <span>{checkPassword.message}</span>

        {/* button not showing on screen */}
        <Button type="submit"> SIGN UP</Button> 
      </form>
    </div>
  );
};

export default SignUpForm;
