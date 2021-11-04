import { Box, Container, Grid, Typography } from "@mui/material";
import img2 from '../assets/images/cavity.png';
import img1 from '../assets/images/fluoride.png';
import img3 from '../assets/images/whitening.png';
import Service from "./Service";


export default function Services() {
  return (
    <Box sx={{ flexGrow: 1 }} my={4}>
      <Container>
        <Typography variant="h6" my={1} align="center" color='#5FC7C7' fontWeight={700}>
          OUR SERVICES
        </Typography>
        <Typography variant="h3" align="center" color='#203047' fontWeight={600}>
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          
              <Service img={img1} title="Fluoride Treatment"/>
              <Service img={img2} title="Fluoride Treatment"/>
              <Service img={img3} title="Fluoride Treatment"/>
            </Grid>
      </Container>
    </Box>
  );
}
