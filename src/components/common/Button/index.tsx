import React from 'react';
import styled from '@emotion/styled';
import { colors } from 'src/styles/variables';

const GreenButtonStyled = styled.button`
  background: ${colors.mountainMeadow};
  color: ${colors.white};
  border: none;

  &:hover {
    background: ${colors.mountainMeadowDark};
  }
`;

export const GreenButton = props => {
  return <GreenButtonStyled {...props}> {props.children} </GreenButtonStyled>;
};

const BlueButtonStyled = styled.button`
  background: ${colors.pelorous};
  color: ${colors.white};
  border: none;

  &:hover {
    background: ${colors.mountainMeadowDark};
  }
`;

export const BlueButton = props => {
  return <BlueButtonStyled {...props}> {props.children} </BlueButtonStyled>;
};

const RedButtonStyled = styled.button`
  background: ${colors.darkCoral};
  color: ${colors.white};
  border: none;

  &:hover {
    background: ${colors.mountainMeadowDark};
  }
`;

export const RedButton = props => {
  return <RedButtonStyled {...props}> {props.children} </RedButtonStyled>;
};
