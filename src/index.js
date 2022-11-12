import React from 'react';
import ReactDOM from 'react-dom/client';
import HotelIntegration from './hotel-booking-app/HotelIntegration';
import ComboBox from './inputs/AutoComplete-ComboBox';
import BasicButtons, {IconLabelButtons}  from './inputs/Button-All';
import ToggleButtons from './inputs/Toggle-All';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HotelIntegration/>
  </React.StrictMode>
);
