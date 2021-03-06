import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import routes
import AllRoutes from './routes';

// import components
import Header from './components/Layout/Header';


const Layout = ({ children }) => {
    return (
    <Fragment>
      <Header/>  
        <main>
          { children }
        </main>
    </Fragment>
)};

const MyRoute = ({path, component},k) => (
<Route 
  key={k} 
  path={path} 
  component={component}
  exact
/>
);

const Routes = () => (
  <Layout>
    <Switch>
      { AllRoutes.map(MyRoute)}
    </Switch>
  </Layout>
);

const App = () => (
  <Router>
    <Route  path="/" component={Routes} />
  </Router>
);

export default App;
