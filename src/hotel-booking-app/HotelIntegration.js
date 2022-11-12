import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AdvanceAmount from "./AdvanceAmount";
import Ameneties from "./Ameneties";
import CustomerInfo from "./CustomerInfo";
import Register from "./Register";
import RoomType from "./RoomType";
import DrawerAppBar from "./Header";


export default function HotelIntegration() {
  return (
    <div>
      <DrawerAppBar/>
      <CustomerInfo />
      <RoomType />
      <Ameneties />
      <AdvanceAmount />
      <Register />
    </div>
  );
}
