import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function MakeAdmin() {
    const [email, setEmail] = useState('');

    const handleMakeAdmin = e =>{
        const user = {email}
        
        fetch('http://localhost:5000/users/admin', {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount === 1){
                alert('Admin Added Successful')
                setEmail('')
            }
        })


        e.preventDefault()
    }
    return (
        <div>
            <h1>Make a Admin</h1>
            <form onSubmit={handleMakeAdmin}>
                <TextField type='email' id="standard-basic" label="Email" variant="standard" onBlur={e => setEmail(e.target.value)}/>
                <br/>
                <br/>
                <Button variant='contained' type='submit'>Make Admin</Button>
            </form>
        </div>
    )
}
