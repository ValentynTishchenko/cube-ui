import styled from '@emotion/styled';
import { colors } from 'src/styles/variables';

type UserStatusProps = {
  isOnline: boolean;
}
const UserCardContainerHeight = 40;

export const UserCardContainer = styled.section`
  background: ${colors.white};
  min-height: ${UserCardContainerHeight}px;
  display: flex;
  align-items: stretch;
  align-content: stretch;
  flex-direction: row;
  margin: 0 0 10px 0;
`;

export const UserStatus = styled.div<UserStatusProps>`
  width: 8px;
  min-height: ${UserCardContainerHeight}px;
  height: 100%;
  background: ${({ isOnline }) => isOnline ? colors.mountainMeadowDark : colors.darkCoral};
`;

export const UserCardContent = styled.div`
  padding-left: 10px;
  
  .user-full-name{
    margin: 10px 0 0 0;
    color: ${colors.mountainMeadowDark};
  }

  .user-description{
     margin: 0 0 10px 0;
     color: ${colors.grey};
  }
`;