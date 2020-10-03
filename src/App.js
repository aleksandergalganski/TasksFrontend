import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Tasks from './components/tasks/Tasks';
import ProtectedRoute from './components/routing/ProtectedRoute';
import './App.css';
import store from './store';
import { getUser } from './actions/authActions';
import Footer from './components/layout/Footer';

const App = () => {
  useEffect(() => {
    store.dispatch(getUser());
    // eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <main>
          <Navbar />
          <div className='container'>
            <Switch>
              <ProtectedRoute exact path='/' component={Tasks} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
