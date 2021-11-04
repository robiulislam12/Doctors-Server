import React from 'react';
import AppointmentAvable from '../AppointmentAvable';
import AppointmentHeader from '../AppointmentHeader';
import Navigation from '../Navigation';

export default function Appointment() {

    const [date, setDate] = React.useState(new Date());
    
    return (
        <div>
            <Navigation/>
            <AppointmentHeader date={date} setDate={setDate}/>
            <AppointmentAvable date={date}/>
        </div>
    )
}
