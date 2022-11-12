import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignupForm from './formik-components/SignupForm';
import HotelIntegration from './hotel-booking-app/HotelIntegration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignupForm/>
  </React.StrictMode>
);
