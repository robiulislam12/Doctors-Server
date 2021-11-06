import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../assets/images/chair.png';
import Calender from './Calender';

export default function AppointmentHeader({date, setDate}) {
    return (
        <Box sx={{my: 15}}>
            <Container>
               <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' color='#203047' >Appointment</Typography>
                        <Calender date={date} setDate={setDate}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={chair} style={{width: '100%'}} alt="" />
                    </Grid>
               </Grid>
            </Container>
        </Box>
    )
}
