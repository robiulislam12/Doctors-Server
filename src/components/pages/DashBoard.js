import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Calender from '../../assets/images/calendar.svg';
import File from '../../assets/images/file.svg';
import Menu from '../../assets/images/menu.svg';
import People from '../../assets/images/people.svg';
import Settings from '../../assets/images/settings.svg';
import useAuth from '../../hooks/useAuth';
import AddDoctor from './AddDoctor';
import DashboardHome from './DashboardHome';
import MakeAdmin from './MakeAdmin';


const drawerWidth = 200;

export default function DashBoard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    //Nesting url and path
    let { path, url } = useRouteMatch();

    //Admin
    const {admin} = useAuth()

  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div style={{backgroundColor:'#1CC7C1', color:'white', height:'100vh'}}>
        <Toolbar />
        <List>
          
          <Link to={`${url}`}>
            <ListItem button >
              <ListItemIcon><img src={Menu} alt="" /></ListItemIcon>
              <span style={{color:'white'}}>Dashboard</span>
            </ListItem>
          </Link>

          <Link to={`${url}/appointment`}>
            <ListItem button >
              <ListItemIcon><img src={Calender} alt="" /></ListItemIcon>
              <span style={{color:'white'}}>Appointment</span>
            </ListItem>
          </Link>

          <Link to={`${url}/people`}>
            <ListItem button >
              <ListItemIcon><img src={People} alt="" /></ListItemIcon>
              <span style={{color:'white'}}>Patients</span>
            </ListItem>
          </Link>

          <Link to={`${url}/prescriptions`}>
            <ListItem button >
              <ListItemIcon><img src={File} alt="" /></ListItemIcon>
              <span style={{color:'white'}}>Prescriptions</span>
            </ListItem>
          </Link>

          <Link to={`${url}/setting`}>
            <ListItem button >
              <ListItemIcon><img src={Settings} alt="" /></ListItemIcon>
              <span style={{color:'white'}}>Setting</span>
            </ListItem>
          </Link>

          {
            admin && <>
              <Link to={`${url}/makeAdmin`}>
            <ListItem button >
              <ListItemIcon><AdminPanelSettingsIcon /></ListItemIcon>
              Make a admin
            </ListItem>
          </Link>
          <Link to={`${url}/addDoctor`}>
            <ListItem button >
              <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
              Add a Doctor
            </ListItem>
          </Link>
            </>
          }
          
        </List>
        
      </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h12" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       
       {/* Declare the react router for nesting */}
          
          <Switch>
            <Route exact path={path}>
                <DashboardHome/>
            </Route>
            <Route path={`${path}/makeAdmin`}>
                <MakeAdmin/>
            </Route>
            <Route path={`${path}/addDoctor`}>
                <AddDoctor/>
            </Route>
          </Switch>

       {/* Declare the react router for nesting */}
      </Box>
    </Box>
    )
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };