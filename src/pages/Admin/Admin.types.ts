import React from 'react';

export type routeType = {
  path: string;
  component?: React.ComponentType;
  exact?: boolean;
}