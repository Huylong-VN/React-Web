import './App.css';
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import { Detail } from './Pages/Detail';
import { Client } from './Layout/Client';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  ></Route>
);
function App() {
  return (
    <Router>
        <AppRoute exact component={Detail} layout={Client} path="/Detail" />
        <AppRoute exact component={Home} layout={Client} path="/Home" />
        <AppRoute exact component={Home} layout={Client} path="/" />
        <AppRoute exact component={Login} path="/Login" />
    </Router>
  );
}

export default App;