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
          <Route path="/purchases/new" component={CreatePurchase}></Route>
        </Router>
      </div>
      
      <div className="appFooter">
        {/* FOOTER */}
      </div>
      
    </div>
  );
}

export default App;
