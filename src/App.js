import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Tasks from './components/tasks/Tasks';
import './App.css';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <div className='container'>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/tasks' component={Tasks} />
            </div>
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
