import SignUpForm from "../sign-up-form/sign-up-form.component";
import SignInForm from "../sign-in-form/sign-in-form.component";

const Authentication = () => {
 

  return (
    <div style={{display:"flex", justifyContent: "space-between", width: "900px", margin: "30px auto"}}>
       <SignInForm/>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
