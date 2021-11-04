import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from "./components/pages/Appointment";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/appointment" component={Appointment} />
      </Switch>
    </Router>
  );
}
