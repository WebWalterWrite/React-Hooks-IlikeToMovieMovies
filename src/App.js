import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import routes
import AllRoutes from './routes';

// import components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';


const Styles = {
  backgroundColor:'red',
  position:'fixed',
  bottom:10,
  right:5,
  zIndex:99999,
  transition:'all .5s ease-in-out'
}
const Layout = ({ children }) => {
    return (
    <Fragment>
      <Header/>  
        <main>
          { children }
        </main>
      <Footer />
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
