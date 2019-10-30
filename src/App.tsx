import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createBitbucketStore from './store';
import Router from './routes';

const App: React.FC = () => {
  const store = createBitbucketStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
