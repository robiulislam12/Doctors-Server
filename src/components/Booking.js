import { Button, Grid, Paper, Typography } from '@mui/material';
import React from "react";
import BookingModal from "./BookingModal";


export default function Booking({booking , date, setBookingSuccess}) {

    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
      <>
    <Grid item xs={12} md={4} sm={6} >
      <Paper elevation={2} sx={{py :5}}>
      <Typography variant="h6" color="#1CC7C1" fontWeight={600}>
        {booking.name}
      </Typography>
      <Typography variant="h5" my={1} color="#3A4256" fontWeight={600}>
        {booking.time}
      </Typography>
      <Typography
        component="p"
        variant="base"
        my={2}
        color="#3A4256"
        fontWeight={600}
      >
        {booking.space} SPACES AVAILABLE
      </Typography>
        <Button variant="contained" onClick={handleOpen} size='large'>Book appointment</Button>
      </Paper>
    </Grid>

        <BookingModal 
        handleClose={handleClose}
         open={open} 
         booking={booking} 
         date={date}
         setBookingSuccess={setBookingSuccess}
         />
    </>
  );
}
