import CustomerHeader from './components/CustomerHeader';
import './static/css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateCustomer from './components/CreateCustomer';
import ViewAllCustomers from './components/ViewAllCustomers';
import CreatePurchase from './components/CreatePurchase';
import ViewAllPurchases from './components/ViewAllPurchases';
import CreateProduct from './components/CreateProduct';
import ViewAllProducts from './components/ViewAllProducts';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="app">
      
      <div className="appHeader">
        <CustomerHeader />
      </div>

      <div className="appBody">
        <Router>
          <Route exact path="/"><h1>Home</h1></Route>
          <Route exact path="/customers" component={ViewAllCustomers}></Route>
          <Route path="/customers/new" component={CreateCustomer}></Route>

          <Route exact path="/purchases" component={ViewAllPurchases}></Route>
          <Route path="/purchases/new" component={CreatePurchase}></Route>
          <Route exact path="/products" component={ViewAllProducts}></Route>
          <Route path="/products/new" component={CreateProduct}></Route>
          <Route exact path="/products/:id/update" component={UpdateProduct}></Route>
        </Router>
      </div>
      
      <div className="appFooter">
        {/* FOOTER */}
      </div>
      
    </div>
  );
}

export default App;
