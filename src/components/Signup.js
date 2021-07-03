import React from "react";
//import { KeyboardDatePicker } from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import CreateUser from "./helpers/createUser";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      preferredUsername: "",
      gender: "",
      birthdate: "",
      address: "",
      email: "",
      phoneNumber: "",
      isPasswordSame: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.signup = this.signup.bind(this);
    this.checkIfPasswordsAreSame = this.checkIfPasswordsAreSame.bind(this);
    this.getBackToLoginPageHandler = this.getBackToLoginPageHandler.bind(this);
  }

  onChangeHandler(e) {
    //console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const type = target.type;
    const id = target.id;

    if (type === "radio") {
      this.setState({
        [name]: id,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  checkIfPasswordsAreSame(e) {
    const confirmPassword = e.target.value;
    if (confirmPassword === this.state.password) {
      this.setState({
        isPasswordSame: true,
      });
    } else {
      this.setState({
        isPasswordSame: false,
      });
    }
  }

  signup(e) {
    // console.log(e);
    e.preventDefault();
    const user = { ...this.state };

    CreateUser({ user })
      .then((data) => {
        console.log(data);
        this.props.history.push("/");
      })
      .catch((error) => console.log(error));
  }

  getBackToLoginPageHandler() {
    this.props.history.push("/");
  }

  render() {
    //console.log(this.state);

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form className="form-container" onSubmit={this.signup}>
          <div className="form-container__item form-container__logo">
            EmpFarm
            <div>Sign up to enter the organic world</div>
          </div>
          <div className="form-container__item">
            <input
              className="textfield"
              autoComplete="false"
              name="firstname"
              required
              id="firstname"
              value={this.state.firstname}
              onChange={this.onChangeHandler}
            />
            <label
              className={
                this.state.firstname ? " textlabel-moveup" : "textlabel"
              }
              htmlFor="firstname"
            >
              First Name{" "}
            </label>
          </div>
          <div className="form-container__item">
            <input
              className="textfield"
              autoComplete="false"
              name="lastname"
              required
              id="lastname"
              value={this.state.lastname}
              onChange={this.onChangeHandler}
            />
            <label
              className={
                this.state.lastname ? " textlabel-moveup" : "textlabel"
              }
              htmlFor="lastname"
            >
              Last Name{" "}
            </label>
          </div>
          <div className="form-container__item">
            <input
              className="textfield"
              autoComplete="false"
              name="preferredUsername"
              required
              id="preferredUsername"
              value={this.state.preferredUsername}
              onChange={this.onChangeHandler}
            />
            <label
              className={
                this.state.preferredUsername ? " textlabel-moveup" : "textlabel"
              }
              htmlFor="preferredUsername"
            >
              User Name{" "}
            </label>
          </div>

          <div className="form-container__item">
            <input
              className="textfield"
              autoComplete="false"
              name="password"
              type="password"
              required
              id="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
            <label
              className={
                this.state.password ? " textlabel-moveup" : "textlabel"
              }
              htmlFor="password"
            >
              Password{" "}
            </label>
          </div>
          <div className="form-container__item">
            <input
              className="textfield"
              autoComplete="false"
              name="confirmPassword"
              required
              id="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.onChangeHandler}
              // onKeyUp={this.checkIfPasswordsAreSame}
            />
            <label
              className={
                this.state.confirmPassword ? " textlabel-moveup" : "textlabel"
              }
              htmlFor="confirmPassword"
            >
              Confirm Password{" "}
            </label>

            {/* {this.state.isPasswordSame ? (
              <span style={{ color: "green" }}>Passwords are matching</span>
            ) : (
              <span style={{ color: "red" }}>Passwords are not matching</span>
            )} */}
          </div>
          <div className="form-container__item">
            <div className="checkbox-container-label">
              <label>Gender</label>
            </div>
            <input
              id="male"
              name="gender"
              type="radio"
              checked={this.state.gender === "male"}
              onChange={this.onChangeHandler}
            />
            <label className="checkbox-label" htmlFor="male">
              Male{" "}
            </label>
            <input
              id="female"
              name="gender"
              type="radio"
              checked={this.state.gender === "female"}
              onChange={this.onChangeHandler}
            />
            <label className="checkbox-label" htmlFor="female">
              Female{" "}
            </label>
            <input
              id="not-defined"
              name="gender"
              type="radio"
              checked={this.state.gender === "not-defined"}
              onChange={this.onChangeHandler}
            />
            <label className="checkbox-label" htmlFor="not-defined">
              Would not like to mention{" "}
            </label>
          </div>
          <div className="form-container__item">
            <label className="checkbox-container-label">Birth Date</label>
            <input
              style={{ marginLeft: "1rem" }}
              type="date"
              value={this.state.birthdate}
              name="birthdate"
              id="birthdate"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-container__item">
            <input
              className="textfield"
              autoComplete="false"
              name="address"
              id="address"
              type="textarea"
              value={this.state.address}
              onChange={this.onChangeHandler}
            />
            <label
              className={this.state.address ? " textlabel-moveup" : "textlabel"}
              htmlFor="address"
            >
              Address{" "}
            </label>
          </div>
          <div className="form-container__item">
            <input
              className="textfield"
              autoComplete="false"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.onChangeHandler}
            />
            <label
              className={this.state.email ? " textlabel-moveup" : "textlabel"}
              htmlFor="email"
            >
              Email{" "}
            </label>
          </div>
          <div className="form-container__item">
            <input
              className="textfield"
              autoComplete="false"
              name="phoneNumber"
              id="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.onChangeHandler}
            />
            <label
              className={
                this.state.phoneNumber ? " textlabel-moveup" : "textlabel"
              }
              htmlFor="address"
            >
              Phone Number{" "}
            </label>
          </div>
          <div
            className="form-container__item"
            style={{ justifyContent: "space-evenly", marginTop: "2rem" }}
          >
            <Button variant="contained" type="submit" color="primary">
              Submit
            </Button>
            <Button
              variant="contained"
              onClick={this.getBackToLoginPageHandler}
              color="secondary"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
