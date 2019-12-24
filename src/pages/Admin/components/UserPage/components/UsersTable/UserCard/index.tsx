import React from 'react';
import { UserModel } from 'src/models/User';
import { UserCardContainer, UserCardContent, UserStatus, UserCardActions } from './UserCard.style';
import { BlueButton, RedButton } from 'src/components/common/Button';

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
          <h3 className='user-full-name'>{`${name} ${lastName}`}
          <UserCardActions>
            <BlueButton>Додати тест</BlueButton>
            <BlueButton>Змінити</BlueButton>
            <RedButton>Видалити</RedButton>
          </UserCardActions>
          </h3>
          <p className='user-description'>
            {description}
          </p>
        </UserCardContent>
      </UserCardContainer>
    );
  }
}

export default UserCard;