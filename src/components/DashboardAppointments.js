import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

export default function DashboardAppointments({date}) {
    const {user} = useAuth();
    const [appointments, setAppointments] = useState([])

    useEffect(()=>{
      const url = `https://doctors-portal-12.herokuapp.com/appointments?email=${user.email}`
        axios(url)
        .then(res => {
            setAppointments(res.data)
        })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date])
    return (
       
        <>
            <h2>Appointments</h2>
            <TableContainer component={Paper}>
      <Table aria-label="Appointments Table">
        <TableHead>
          <TableRow>
            <TableCell>Service Name</TableCell>
            <TableCell>Patient Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{appointment.patient_name}</TableCell>
              <TableCell component="th" scope="row">{appointment.serviceName}</TableCell>
              <TableCell >{appointment.date}</TableCell>
              <TableCell >{appointment.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
