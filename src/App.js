import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AllBikes from './Pages/AllBikes/AllBikes';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import BikeDetails from './Pages/Home/BikeDetails/BikeDetails';
function App() {
  return (
     <AuthProvider>
     <Router>
      
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/all-bikes">
          <AllBikes></AllBikes>
        </Route>

        <PrivateRoute path="/bikes/:id">
            <BikeDetails></BikeDetails>
          </PrivateRoute>

        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>

        <Route path="*">
            <NotFound></NotFound>
          </Route>
        
      </Switch>
      
    </Router>
    </AuthProvider>
   
  );
}

export default App;
