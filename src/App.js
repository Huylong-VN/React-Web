import './App.css';
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";


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

    </Router>
  );
}

export default App;
