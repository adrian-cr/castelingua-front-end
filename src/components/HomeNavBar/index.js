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
    <Box
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
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
          ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
          Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
          delectus quo eius exercitationem tempore. Delectus sapiente, provident
          corporis dolorum quibusdam aut beatae repellendus est labore quisquam
          praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
          deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
          fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
          recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography>
      </Box>
    </Box>
  );
}
/* export default class Header extends Component {
  render() {
    return (
      <Grid
        className="header"
        container
        spacing={2}
        sx={{
          "justifyContent":"space-between"
        }}
      >
        <Grid
          className="logo-container"
          item size={{
            "md": 3,
            "sm": 4
          }}
          sx={{
            "display":"flex",
            "alignItems":"center"
            }}
        >
            <img className="imagotype" src="../images/imagotype_indigo_reverse.png"/>
            <img className="logotype" src="../images/logotype_white.png"/>
        </Grid>
        <Grid item container>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '0 10px' }}>
                <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
              </li>
              <li style={{ margin: '0 10px' }}>
                <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
              </li>
              <li style={{ margin: '0 10px' }}>
                <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
              </li>
            </ul>
          </nav>
        </Grid>
      </Grid>
        /* <Container maxWidth="lg" className="header">
        <Container fixed  className="logo-container">
          <img className="imagotype" src="../images/imagotype_indigo_reverse.png"/>
          <img className="logotype" src="../images/logotype_white.png"/>
        </Container>
        <Container fixed>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '0 10px' }}>
                <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
              </li>
              <li style={{ margin: '0 10px' }}>
                <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
              </li>
              <li style={{ margin: '0 10px' }}>
                <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
              </li>
            </ul>
          </nav>
        </Container>
      </Container>
    );
  }
} */
