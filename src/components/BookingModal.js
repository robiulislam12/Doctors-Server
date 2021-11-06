import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from '../hooks/useAuth';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function BookingModal({ handleClose, open, booking ,date}) {

  const {user} = useAuth();

    const handleSubmit = e => {

        alert('Submiting')

        handleClose()
        e.preventDefault()
    }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            component="h2"
            color="#1CC7C1"
            align="center"
          >
            {booking.name}
          </Typography>

          {/* Modal Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-size-small"
              disabled
              defaultValue={booking.time}
              ariant="outlined"
              size="small"
              sx={{ width: "90%", m: 1 }}
            />
            <TextField
              type="text"
              id="outlined-size-small"
              defaultValue={user.displayName}
              ariant="outlined"
              size="small"
              sx={{ width: "90%", m: 1 }}
            />
            <TextField
              type="email"
              id="outlined-size-small"
              defaultValue={user.email}
              ariant="outlined"
              size="small"
              sx={{ width: "90%", m: 1 }}
            />
            <TextField
              type="text"
              id="outlined-size-small"
              defaultValue={"Your Number"}
              ariant="outlined"
              size="small"
              sx={{ width: "90%", m: 1 }}
            />
            <TextField
            disabled
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              ariant="outlined"
              size="small"
              sx={{ width: "90%", m: 1 }}
            />
            <Button type='submit' variant="contained" size='large'>Submit</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}
