import React from 'react'
import "./SearchBars/DrawerSearchBar.css";
import {AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import DrawerSearchBar from './SearchBars/DrawerSearchBar';


const drawerWidth = 240;
const navItems = [
  {
    label:'Sobre Nosotros',
    relPath: "/nosotros"
  },
  {
    label: 'Contacto',
    relPath: "/contacto"
  }];

export default function HomeNavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // Prevent drawer from closing when clicking inside the DrawerSearchBar input
  const handleDrawerClick = (event) => {
    // If the click originated from inside the search bar, don't close the drawer
    if (
      event.target.closest('.search-bar-container') || // adjust selector to your DrawerSearchBar root class
      event.target.closest('input[type="text"]')
    ) {
      event.stopPropagation();
    } else {
      handleDrawerToggle();
    }
  };
  const drawer = (
    <Box className="drawer" onClick={handleDrawerClick}
      sx={{
        height: "100%",
        textAlign:"center"
      }}
    >
      <Container className="logo-container">
        <img className="isotype" src="../images/isotype_white_seethrough.png"/>
      </Container>
      <Divider/>
      <DrawerSearchBar></DrawerSearchBar>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton href={item.relPath} className="drawer-nav-link"
              sx={{
                color: "#FFF",
                textAlign: 'center'
                }}
            >
              <ListItemText primary={item.label}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box id="navBar"
      sx={{
        display: 'flex'
      }}
    >
      <CssBaseline />
      <AppBar component="nav"
        sx={{
          padding:0
        }}
      >
        <Toolbar className="header"
          sx={{
            display:"flex",
            justifyContent:"space-between",
            margin: 0,
            padding: "10px 0 10px 20px",
            width: "100vw"
          }}
        >
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
            sx={{
              display: {
                sm: 'none'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Button className="logo-container" href="/"
            sx={{
              alignContent: "center",
              alignItems:"center",
              display:"flex",
              margin: 0,
              width: {
                xs: "50%",
                sm: "40%",
                md: "30%",
                lg: "25%"
              }
            }}
          >
            <img className="imagotype" src="../images/imagotype_white_seethrough.png"/>
            <img className="logotype" src="../images/logotype_white.png"/>
          </Button>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block'
                }
            }}
          >
            {navItems.map((item) => (
              <Button className="nav-link" href={item.relPath} key={item.label}
                sx={{
                  color: "aliceblue",
                  fontWeight: 800,
                  marginRight: "35px"
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{keepMounted: true}}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main"
        sx={{
          padding: 5
        }}
      >
      </Box>
    </Box>

  );
}
