import { Route, Routes} from "react-router-dom";
import Home from "../home/Home.component";
import Navigation from "../navigation/navigation.component";
import SignIn from "../sign-in/sign-in.component";
import SignUpForm from "../sign-up-form/sign-up-form.component";
import { signIn } from 'firebase/auth';
const Shop = () => {
  return (
    <div>
      <h1>Hello shop</h1>
    </div>
  );
};



const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;
