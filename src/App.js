import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        {" "}
        This is my home page
      </Route>
      <Route exact path="/starred">
        {" "}
        This is starred
      </Route>
      <Route>Page Not Found</Route>
    </Switch>
  );
}

export default App;
