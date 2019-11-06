import styled from '@emotion/styled';
import { colors } from 'src/styles/variables';

export const AdminHeaderContainer = styled.header`
  width: 100%;  
  
  ul {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: flex-end;
  
    li {
    padding: 0 5px;
      display: inline-block;
      list-style: none;
      
      a {
        font-size: 18px;
        text-decoration: none;
        color: ${colors.nepal};
        
        &:active {
          color: ${colors.white};
          text-decoration: underline;
        }
        
        &:hover {
          color: ${colors.spray};
          text-decoration: underline;
        }
    
      }
    }
  }
`;