import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';
import React from 'react';

export default function Calender({date, setDate}) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
        displayStaticWrapperAs="desktop"
          openTo="day"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    )
}
