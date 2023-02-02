import { Route, Routes} from "react-router-dom";
import Home from "../home/Home.component";
import Navigation from "../navigation/navigation.component";
import Authentication from "../authentication/authentication.component";
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
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;
