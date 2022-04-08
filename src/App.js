import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetail/ServiceDetail';
import Blog from './Pages/Blog/Blog';
import Register from './Pages/Login/Register/Register';
import Orders from './Pages/Orders/Orders';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import AddService from './Pages/AddService/AddService';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/orders">
              <Orders></Orders>
            </Route>
            <Route path="/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/detail/:detailId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
