import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import Search from "./Search";
import PorfileMenu from "./ProfileMenu";
import ProfileMenu from "./ProfileMenu";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#09AF0F",
    color: "#f2f2f2",
    position: "fixed",
    zIndex: 100,
    top: 0,
  },
  menuIcons: {
    "& .MuiSvgIcon-root": {
      fontSize: "2.5rem",
      color: "#f2f2f2",
    },
  },
  input: {
    "& .MuiInputBase-input": {
      color: "#f2f2f2",
      fontSize: "1.8rem",
      borderBottom: "3px solid #f2f2f2",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "3px solid #f2f2f2",
    },
  },
});

const NavBar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className="toolbar">
        <div>
          <Typography variant="h3">EmpFarm</Typography>
        </div>
        <div>
          <Search />
        </div>
        <div>
          <IconButton className={classes.menuIcons}>
            <Link to="/feed">
              <HomeIcon />
            </Link>
          </IconButton>

          <IconButton className={classes.menuIcons}>
            <Link to="/chat">
              <ChatIcon />
            </Link>
          </IconButton>

          <IconButton
            className={classes.menuIcons}
            onClick={() => {
              showProfileMenu
                ? setShowProfileMenu(false)
                : setShowProfileMenu(true);
            }}
          >
            {/* <Link to="/profile">
             
            </Link> */}
            <AccountCircleRoundedIcon />
          </IconButton>
          {showProfileMenu ? <ProfileMenu /> : null}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
