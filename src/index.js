import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; /*Using HashRouter because GitHub pages does not support BrowserRouter technologies*/
import { ModalContextProvider } from './contexts/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
