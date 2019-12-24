import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactionOfChoice from './components/ReactionOfChoice';
import { routeType } from '../Admin/Admin.types';
import { Page } from '../../components';
import AdminHeader from '../Admin';


class UserPage extends React.PureComponent {
  private readonly routes = [
    {
      exact: true,
      path: '/user/reaction-of-choice',
      component: ReactionOfChoice,
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

export default UserPage;