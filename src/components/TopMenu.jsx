import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import userService from "../services/UserService";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "Black",
    paddingRight: "1rem",
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <div className="social body">
              
               <div>

               <img src="https://icon-library.com/images/instagram-icon-free/instagram-icon-free-4.jpg" className="icon"/>
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" className="icon"/>
              
              <img src="https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png" className="icon"/> 

              <span className="textbar">
                <img src="https://i.pinimg.com/originals/ad/3b/21/ad3b213bc790807c25d8bb774dab3c35.jpg" className="icon"/>+92 321 4550 816</span>

                <span className="textbar-1">
                <img src="https://cdn.onlinewebfonts.com/svg/img_341916.png" className="icon"/>a1@gmail.com</span>

               </div>
               
      </div>
        
      <div className="Toolbar">
          <div className="logo"><img src="data:image/png;base64,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" className="logo"/> </div>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/packages" className={classes.link}>
            Packages
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
          Equipments
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products/new" className={classes.link}>
            New Equipments
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Sign In
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Sign Up
              </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name + userService.getLoggedInUser().role}
          </Button>
        )}
      </div>
    </AppBar>
  );
};

export default TopMenu;
