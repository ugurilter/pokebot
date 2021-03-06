import React from 'react';
import { ToastContainer } from 'react-toastify';

import Auth from 'containers/Auth';
import Log from 'containers/Log';

import Column from 'components/Bulma/Column';
import Columns from 'components/Bulma/Columns';

export default function App() {
  return (
    <Columns>
      <Column customClass="is-sidebar" span="3">
        <Auth />
      </Column>
      <Log />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable={false}
        pauseOnHover
      />
    </Columns>
  );
}
