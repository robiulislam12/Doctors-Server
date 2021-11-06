import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, useHistory } from "react-router-dom";
import useAuth from '../hooks/useAuth';


export default function Navigation() {

  //useFirebase 
  const {user , logOut} = useAuth()

  const history = useHistory();
  const handleClick = () =>{
    history.push('/')
  }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
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

            
              {
                user.email ? 
                <>
                  {
                    user.photoURL && <img style={{width: '35px', height:'35px', borderRadius: '50%', marginRight: '10px'}} src={user.photoURL} alt="" />
                  }
                  <span style={{marginRight:'10px'}}>{user.displayName}</span>
                  <Button variant='contained' color='error' onClick={logOut}>logOut</Button>
                </>
                : <Link to='/login'> <Button variant='contained' color='error'>Login</Button></Link>
              }
              
            
          </Toolbar>
        </AppBar>
      </Box>
    )
}
