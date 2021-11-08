import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Patients() {
    const [patients, setPatients] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/appointments')
        .then(res => {
            console.log(res.data)
        })
    }, [])

    return (
        <div>
            
        </div>
    )
}
