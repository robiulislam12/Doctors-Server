import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import heroImg from '../assets/images/chair.png';



export default function HeroSection() {
    return (
    <Box sx={{ flexGrow: 1 }} my={10}>
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                   <Box>
                       <Typography variant='h2' color='#203047'>
                            Your New Smile Starts Here
                       </Typography>
                       <Typography variant='h6' color='#B4B4B4' fontWeight={400} my={2}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                       </Typography>
                       <Button variant='contained' mt={2} size="large">
                        Get appointment
                       </Button>
                   </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={heroImg} width='550' align='left' alt="" />
                </Grid>
            </Grid>
        </Container>
    </Box>
    )
}
