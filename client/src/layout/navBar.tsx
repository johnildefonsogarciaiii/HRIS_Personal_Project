import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Avatar,
  Container,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Menu,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import AuthService from "../services/authService";
import history from "../services/history";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_USER, GET_CURRENT_USER } from "../store/userSlice";
import { useEffect } from "react";
import { GETTING_ALL_LEAVE } from "../store/leaveSlice";

const pages = [
  "Home",
  "Application",
  "Ticketing",
  "User Profile",
  "E-Library",
  "Company Profile",
];
const settings = ["Logout"];
function NavBar() {
const authService = AuthService();
const dispatch = useDispatch();
const user = useSelector((state: object) => state.auth.user);

useEffect(() => {
try {
const fetchingUser = async() => {
  const currrentUser = await dispatch(GET_CURRENT_USER());
  const currentLeave = await dispatch(GETTING_ALL_LEAVE());
}
fetchingUser();
} catch (error) {
console.log(error)
}
}, []);



  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // console.log(user)


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    dispatch(LOGOUT_USER());
    authService.logout();
    history.push('/');

  };

  return (
    <AppBar position="static" sx={{ background: '#0d47a1'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* for phone and tablet screens */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              //   fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HRIS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={page.toLowerCase()}
                  >
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      <Typography textAlign="center" sx={{ textTransform: "none" }}>{page}</Typography>
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* for desktop and loptop screens */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              //   fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HRIS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page} style={{ textDecoration: "none" }}
                // to={page.toLowerCase()}
                
                to={page === "Ticketing" ? "https://ticketing-fronend.vercel.app/" : page.toLowerCase()}
                rel={page === "Ticketing" ? "noopener noreferrer" : ""}
                target={page === "Ticketing" ? "_blank": ""}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Typography sx={{ textTransform: "none"}}>{page}</Typography>
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Logout">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt=""  />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
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
  );
}
export default NavBar;
