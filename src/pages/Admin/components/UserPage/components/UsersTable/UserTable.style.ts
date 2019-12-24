import styled from '@emotion/styled';
import { colors } from 'src/styles/variables';

export const UsersTableContainer = styled.section`
  ul {
    padding: 0;

    li {
      list-style: none;
    }
  }
`;

export const Actions = styled.button`
  position: absolute;
  margin-top: 10px;
  height: 30px;
  color: ${colors.white};
  font-size: 20px;

  border: none;
  background: ${colors.mountainMeadowDark};
`;
