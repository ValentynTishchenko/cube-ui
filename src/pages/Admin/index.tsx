import React from 'react';
import { Route } from 'react-router-dom';

import UserList from './components/UserPage';
import { routeType } from './Admin.types';

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

  renderRoute = (route: routeType, id) => (
    <Route component={route.component} exact={route.exact} path={route.path} key={id} />
  );

  renderRoutes = () => this.routes.map(this.renderRoute);

  render() {
    return (<section>123</section>);
  }
}

export default AdminPage;