import React from 'react';
import ReactDOM from 'react-dom/client';

// Core React JS: Chapter Eight - Input Elements & Forms
// import App from './input-forms/app';

// Core React JS: Chapter Eight - Checkbox & Radio Button
// import App from './checkbox-radio/app';

// Core React JS: Chapter Eight - Advance Checkbox & Array
// import App from './checkbox-array/app';

// Core React JS: Chapter Eight - Uncontrolled form
// import App from './uncontrolled-form/app';

// Core React JS: Chapter Eight - Controlled form
// import App from './controlled-form/app';

// Core React JS: Chapter Eight - Split form into multiple components
// import App from './split-form/app';

// Core React JS: Chapter Eight - Sign up Form
// import App from './sign-up-form/app';

// Core React JS: Chapter Eight - Sign up Form with Validation
import App from './sign-up-form-validation/app';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
