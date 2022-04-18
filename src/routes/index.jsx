import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Signup from "../components/signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/siginup" component={Signup} />
	</Switch>
  );
};

export default Routes;