import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createBitbucketStore from './store';
import Router from './routes';
import ModalManager from 'src/modals/ModalManager';

const App: React.FC = () => {
  const store = createBitbucketStore();

  return (
    <Fragment>
      <Provider store={store}>
        <ModalManager />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>

      <div id='modal-root' />
    </Fragment>
  );
};

export default App;
