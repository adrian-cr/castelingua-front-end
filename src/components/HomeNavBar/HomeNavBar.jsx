import React from 'react'
import "./HomeNavBar.css";
import {AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"


const drawerWidth = 240;
const navItems = ['Sobre Nosotros', 'Contacto'];

export default function HomeNavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box className="drawer" onClick={handleDrawerToggle}
      sx={{
        height: "100%",
        textAlign:"center"
      }}
    >
      <Container className="logo-container">
        <img className="isotype" src="../images/isotype_white_seethrough.png"/>
      </Container>
      <Divider/>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton className="drawer-nav-link"
              sx={{
                color: "#FFF",
                textAlign: 'center'
                }}
            >
              <ListItemText primary={item}/>
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
          <Container className="logo-container"
            sx={{
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
          </Container>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block'
                }
            }}
          >
            {navItems.map((item) => (
              <Button className="nav-link" key={item}
                sx={{
                  color: "aliceblue",
                  fontWeight: 800,
                  marginRight: "35px"
                }}
              >
                {item}
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
