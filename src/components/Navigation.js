import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from "react-router-dom";


export default function Navigation() {
  const history = useHistory();
  const handleClick = () =>{
    history.push('/')
  }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography onClick={handleClick} style={{cursor:'pointer'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}
