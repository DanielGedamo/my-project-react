import "./Navbar.css";
import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom"
import  ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

function Navbar() {
  const pages  = ["Home", "category", "Contact","Registration","login","Product","cart"];
  const settings = ["Profile", "Account" , "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  console.log(pages);

  return (
    <div className="navbar  ">

      <AppBar sx={{ textDecoration: 'none' ,
    background:"#063970"}} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              // component="a"
              href="/"
              
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                // background: "#000000",
                textDecoration: "none",
              }}
            ><ShoppingCartCheckoutIcon/>
              {/* <img className="navImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMWs-cPaOOpA_V8Jdq4DSJy1UCxwZxAURMw&usqp=CAU" alt="" /> */}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                  >
                <MenuIcon />
                
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {pages.map((page) => (
                  <MenuItem  key={page} onClick={handleCloseNavMenu}>
                    <Typography   ><Link to= {page } >{page}</Link></Typography>
                  </MenuItem>
                ))}
                

              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
               {/* <img className="navImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMWs-cPaOOpA_V8Jdq4DSJy1UCxwZxAURMw&usqp=CAU" alt="" /> */}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" ,}}
                >
                  <Link  to={page}>{page}</Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", textDecoration:"nun" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    </div>
  );
}

export default Navbar;
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import{ Link }from "react-router-dom"


// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" collapseOnSelect expand="sm">
//         <Navbar.Toggle aria-colcount="navbarScroll" data-bs-target="#navbarScroll"/>
     
//         <Container>
//           <Navbar.Brand href="/home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
          
//             <Nav.Link as={Link} to="Category">Category</Nav.Link>
//             <Nav.Link as={Link} to="Contact">Contact</Nav.Link>
//             <Nav.Link as={Link} to="Registration">Registration</Nav.Link>
//             <Nav.Link as={Link} to="Login">Login</Nav.Link>
//             <Nav.Link as={Link} to="Product">Product</Nav.Link>
//             <Nav.Link as={Link} to="cart">Cart</Nav.Link>
//           </Nav>
//           <Navbar.Brand as={Link} to="Navbar">Navbar</Navbar.Brand>

//         </Container>
        
//       </Navbar>
      
//     </>
//   );
// }

// export default ColorSchemesExample;
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav> */}
