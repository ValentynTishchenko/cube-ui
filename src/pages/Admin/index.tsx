import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminHeader from './components/Header';
import UserList from './components/UserPage';
import { routeType } from './Admin.types';
import { Page } from '../../components';

class AdminPage extends React.PureComponent {
  private readonly routes = [
    {
      exact: true,
      path: '/admin/users',
      component: UserList,
    },
    {
      exact: true,
      path: '/admin/tests',
      component: UserList,
    },
  ];

  renderRoute = (route:routeType, id) => (
    <Route component={route.component} exact={route.exact} path={route.path} key={id} />
  );

  renderRoutes = () => this.routes.map(this.renderRoute);

  render() {
    return (
      <Page>
        <AdminHeader />
        <Switch>
          {this.renderRoutes()}
        </Switch>
      </Page>
    );
  }
}

export default AdminPage;