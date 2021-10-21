import React, { useState, useEffect } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { styled, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MuiDrawer from "@material-ui/core/Drawer";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import HomeIcon from "@material-ui/icons/Home";

import Logo from "../assets/Logo.png";

import { getCategories } from "../api";

import Posts from "./Posts";
import Pagina404 from "./Pagina404";
import Rodape from "../components/page/Rodape";
import PostDetails from "./PostDetails";
import PostsByCategory from "./PostsByCategory";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [categories, setCategories] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getCategories().then(function (data) {
      setCategories(data.categories);
    });
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <img
              style={{ width: 140, height: 35 }}
              src={Logo}
              alt="Logo do Sistema"
            />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem button component={Link} to={"/"}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            {categories.map((categorie, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={"/" + categorie.path}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={categorie.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ background: "#f0f2f5", minHeight: "100vh", flexGrow: 1, p: 3 }}
        >
          <DrawerHeader />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/:category" component={PostsByCategory} />
            <Route exact path="/:category/:id" component={PostDetails} />
            <Route component={Pagina404} />
          </Switch>
          <Rodape />
        </Box>
      </BrowserRouter>
    </Box>
  );
}
