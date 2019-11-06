import React from 'react';
import { UserModel } from 'src/models/User';
import { UserCardContainer, UserCardContent, UserStatus } from './UserCard.style';

type UserCardProps = {
  userData: UserModel,
};

class UserCard extends React.PureComponent<UserCardProps> {
  onClick = () => {
    console.log('onClick');
  };

  render() {
    const { userData: { isOnline, description, lastName, name } } = this.props;
    return (
      <UserCardContainer>
        <UserStatus isOnline={isOnline} />
        <UserCardContent>
          <h3 className='user-full-name'>{`${name} ${lastName}`}</h3>
          <p className='user-description'>
            {description}
          </p>
        </UserCardContent>
      </UserCardContainer>
    );
  }
}

export default UserCard;