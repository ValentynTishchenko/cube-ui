import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import AdminPage from './pages/Admin';
import UserPage from './pages/User';
import { Layout } from './components/Layout';

const Router: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={() => <section>Home</section>} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/user' component={UserPage} />
      </Switch>
    </Layout>
  );
};

export default Router;