import React from 'react';

export const ModalsContext = React.createContext({
  registeredModals: [],
  registrate: () => {
  },
});

export const ModalsContextProvider = ModalsContext.Provider;
export const ModalsContextConsumer = ModalsContext.Consumer;