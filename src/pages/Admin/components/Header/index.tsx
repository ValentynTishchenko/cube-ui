import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { AdminHeaderContainer } from './AdminHeader.style';

type headerItemsType = {
  labelText: string;
  link: string;
}

type HeaderProps = RouteComponentProps & {};

class AdminHeader extends React.PureComponent<HeaderProps> {
  private readonly headerItems: headerItemsType[] = [
    {
      labelText: 'Users',
      link: '/admin/users',
    },
    {
      labelText: 'Settings',
      link: '/admin',
    },
    {
      labelText: 'Statistic',
      link: '/admin',
    },
    {
      labelText: 'Logout',
      link: '/admin',
    }
  ];

  renderHeaderItem = () => this.headerItems.map(({ labelText, link }: headerItemsType, id) => (
    <li key={id}>
      <Link to={link}>
        {labelText}
      </Link>
    </li>
  ));

  render() {
    return (
      <AdminHeaderContainer>
        <ul>
          {this.renderHeaderItem()}
        </ul>
      </AdminHeaderContainer>
    );
  }
}

export default withRouter(AdminHeader);