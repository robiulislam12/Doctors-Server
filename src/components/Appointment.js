import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import bg from "../assets/images/appointment-bg.png";
import doctor from "../assets/images/doctor.png";

const appointMentBg = {
  background: `url(${bg})`,
  backgroundPosition: "center",
  marginTop: "150px",
  backgroundColor: "rgba(58, 66, 86, 0.8)",
  backgroundBlendMode: "darken",
};

export default function Appointment() {

  const history = useHistory();
  const handleClick = () =>{
    history.push('/appointment')
  }

  return (
    <Box style={appointMentBg} sx={{ flexGrow: 1 , marginBottom:'30px'}}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img
              src={doctor}
              width="500"
              style={{ marginTop: "-150px" }}
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              textAlign: "left",
              alignItems:'center'
            }}
          >
            <Box sx={{textAlign:'left'}}>
              <Typography
                variant="h6"
                my={1}
                color="#5FC7C7"
                fontWeight={700}
              >
                Appointment
              </Typography>
              <Typography
                variant="h3"
                my={1}
                color="#fff"
                fontWeight={700}
              >
                Make an appointment Today
              </Typography>
              <Typography variant="h6" my={1}color="#fff">
                It is a long established fact that a reader will be distractedby
                the readable content of a page when looking at its
              </Typography>
              <Button onClick={handleClick}  variant="contained">Learn more</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
