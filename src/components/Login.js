import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
//import LoginScreenImages from "./LoginScreenImages";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import PlaceCenter from "./PlaceCenter";
import ImageContainer from "./helpers/imageContainer";
import { fetchUser } from "./actionCreaters";

const StyledNavLink = styled(NavLink)`
  color: #00b224;
  font-size: 1.8rem;
`;

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(60deg, #66ffa6, #00b224)",
    padding: "1.5rem",
    fontSize: "5rem",
    "& .MuiButton-label": {
      fontSize: "2rem",
    },
  },

  textInput: {
    marginBottom: "1.5rem",
    "& .MuiFormLabel-root": {
      fontSize: "1.8rem",
      color: "#00b224",
    },
    "& .MuiInputBase-root": {
      fontSize: "1.8rem",
      borderBottom: "2px solid #00b224",
      color: "#373737",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "none",
    },
  },
  companyName: {
    fontWeight: 700,
    backgroundColor: "#00b224",
    fontSize: "3rem",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    color: "transparent",
    textAlign: "center",
    paddingBottom: "10px",
  },
});

const Login = (props) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const submitForm = (e) => {
    e.preventDefault();
    //console.log("Form submitted!!");
    //props.history.push("/feed");
    const userData = {
      username: values.username,
      password: values.password,
    };
    props.fetchUser(userData);
    setTimeout(() => {
      props.history.push("/feed");
    }, 3000);
  };

  const handleToggle = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setValues({ ...values, username: e.target.value });
    } else if (e.target.name === "password") {
      setValues({ ...values, password: e.target.value });
    }
  };

  const classes = useStyles();
  return (
    <PlaceCenter>
      <ImageContainer />
      <div className="login-form-container">
        <form className="container" autoComplete="off" onSubmit={submitForm}>
          <div className={classes.companyName}>EmpFarm</div>
          <TextField
            id="filled-search"
            label="username"
            name="username"
            variant="filled"
            className={classes.textInput}
            value={values.username}
            onChange={handleChange}
          />
          <TextField
            id="filled-password"
            label="password"
            name="password"
            type={values.showPassword ? "text" : "password"}
            autoComplete="current-password"
            variant="filled"
            value={values.password}
            className={classes.textInput}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggle} onMouseDown={handleToggle}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>

          <Button variant="contained" type="submit" className={classes.button}>
            {" "}
            Login
          </Button>
          <StyledNavLink style={{ marginTop: "1rem" }} to="/signup">
            New User? Create new account
          </StyledNavLink>
        </form>
      </div>
    </PlaceCenter>
  );
};

const mapStateToProps = (state) => {
  if (state.user) {
    return {
      idToken: state.user.idToken.jwtToken,
    };
  } else {
    return {
      idToken: "",
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userData) => dispatch(fetchUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
