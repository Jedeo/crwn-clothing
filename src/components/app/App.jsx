import { Route, Routes} from "react-router-dom";
import Home from "../home/Home.component";
import Navigation from "../navigation/navigation.component";
import Authentication from "../authentication/authentication.component";
import Shop from "../../routes/shop/shop.component";
import Checkout from "../checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication/>}/>
      </Route>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  );
};

export default App;
