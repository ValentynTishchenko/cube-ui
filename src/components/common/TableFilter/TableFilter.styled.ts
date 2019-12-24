import styled from '@emotion/styled';
import { colors } from '../../../styles/variables';

export const TableFilterContainer = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  color: ${colors.nepal};

  li {
    font-size: 20px;
    padding: 0 5px;
    display: inline-block;
    list-style: none;     

    &.active {
     color: ${colors.white};     
    }
    
    &:hover {
      cursor: pointer;
      color: ${colors.spray};
      
      &.active{
        color: ${colors.white};
      }
    }  
  }
}
`;
