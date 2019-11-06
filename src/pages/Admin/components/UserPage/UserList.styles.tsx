import styled from '@emotion/styled';

import { colors } from 'src/styles/variables';

export const UserListContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const UserListTitle = styled.h1`
  margin: 10px 0 ;
  text-align: center;
  color: ${colors.white};
  font-size: 26px;
`;

export const CreateUserButtonContainer = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-block;
  
  input[type=button]{
    font-size: 28px;
    color: ${colors.white};
    border: none;
    background: none;
  }
`;