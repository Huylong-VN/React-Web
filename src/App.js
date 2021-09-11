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
        <AppRoute component={Detail} layout={Client} path="/Detail" />
        <AppRoute component={Home} layout={Client} path="/Home" />
        <AppRoute component={Home} layout={Client} path="/" />
        <AppRoute component={Login} path="/Login" />
    </Router>
  );
}

export default App;