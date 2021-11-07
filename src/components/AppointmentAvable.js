import { Box, Container, Grid ,Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from './Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]

export default function AppointmentAvable({date}) {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Box>
            <Container>
            <h2 style={{textAlign: 'center'}}>Appointment Available <span style={{color:'#1CC7C1'}}>{date.toDateString()}</span></h2>
            {
                bookingSuccess && <Alert severity="success">Appointment Successful</Alert>

            }
            <Grid container spacing={2} align='center' my={5}>
                {
                    bookings.map(booking => (
                        <Booking key={booking.id} booking={booking} date={date} setBookingSuccess={setBookingSuccess}></Booking>
                    ))
                }
            </Grid>

            </Container>
        </Box>
    )
}
