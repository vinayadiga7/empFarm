import React from "react";
//import { KeyboardDatePicker } from "@material-ui/pickers";
import { Button } from "@material-ui/core";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      preferredUsername: "",
      gender: "",
      birthdate: "",
      address: "",
      email: "",
      phoneNumber: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    console.log(e);
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

  render() {
    console.log(this.state);

    return (
      <form className="form-container">
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
            className={this.state.firstname ? " textlabel-moveup" : "textlabel"}
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
            className={this.state.lastname ? " textlabel-moveup" : "textlabel"}
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
        <div className="form-container__item">
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default Signup;
