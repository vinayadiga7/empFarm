import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Grid,
} from "@material-ui/core";
import LoginScreenImages from "./LoginScreenImages";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(60deg, #66ffa6, #00b224)",
    padding: "1.5rem",
    fontSize: "1.6rem",
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
    fontWeight: 400,
    backgroundColor: "#00b224",
    fontSize: "25px",
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

  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    //console.log("Form submitted!!");
    props.history.push("/feed");
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
    <Grid container spacing={1}>
      <Grid item sm={12} md={6} lg={6}>
        <LoginScreenImages />{" "}
      </Grid>
      <Grid item sm={12} md={6} lg={6}>
        <form className="container" autoComplete="off" onSubmit={submitForm}>
          <div className={classes.companyName}>EmpFarm</div>
          <TextField
            id="filled-search"
            label="username"
            type="email"
            name="username"
            variant="filled"
            className={classes.textInput}
            value={values.username}
            onChange={handleChange}
            placeholder="abc@xyz.de"
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
          <NavLink style={{ marginTop: "1rem" }} to="/signup">
            New User? Create new account
          </NavLink>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
