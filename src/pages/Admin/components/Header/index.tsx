import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { AdminHeaderContainer } from './AdminHeader.style';

type headerItemsType = {
  labelText: string;
  link: string;
  isActive?: boolean;
}

type HeaderProps = RouteComponentProps & {};

class AdminHeader extends React.PureComponent<HeaderProps> {
  private readonly headerItems: headerItemsType[] = [
    {
      labelText: 'Користувачі',
      link: '/admin/users',
      isActive: true,
    },
    {
      labelText: 'Тести',
      link: '/admin/users',
      isActive: false,
    },
    {
      labelText: 'Налаштування',
      link: '/admin',
    },
    {
      labelText: 'Статисика',
      link: '/admin',
    },
    {
      labelText: 'Вийти',
      link: '/admin',
    }
  ];

  renderHeaderItem = () => this.headerItems.map(({ isActive = false, labelText, link }: headerItemsType, id) => (
    <li key={id}>
      <Link className={isActive ? 'active' : ''} to={link}>
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