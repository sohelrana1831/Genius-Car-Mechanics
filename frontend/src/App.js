import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import AddServices from "./Pages/AddServices/AddServices";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import ManageServices from "./Pages/ManageServices/ManageServices";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Sheard/Header/Header";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/booking/:servicesId">
              <Booking />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/addServices">
              <AddServices />
            </Route>
            <Route path="/manageServices">
              <ManageServices />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
