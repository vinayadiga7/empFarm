import React from "react";
import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import farm01 from "../images/empFarm-01.jpg";
import farm02 from "../images/empFarm-02.jpeg";
import farm03 from "../images/empFarm-03.jpg";
import farm04 from "../images/empFamr-04.jpeg";

const styles = {
  imageButtton: {
    backgroundColor: "#F55A0F ",
    color: "#f2f2f2",
    padding: "10px auto",
    alignSelf: "center",
    fontSize: "20px",
  },
};

class LoginScreenImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [farm01, farm02, farm03, farm04],
      selectedIndex: 0,
      isFirst: true,
      isLast: false,
    };
    this.forwardButtonHandler = this.forwardButtonHandler.bind(this);
    this.backwardButtonHandler = this.backwardButtonHandler.bind(this);
    this.buttonsState = this.buttonsState.bind(this);
  }

  forwardButtonHandler() {
    if (this.state.selectedIndex !== 3) {
      let newSelectedIndex = this.state.selectedIndex + 1;
      console.log(this.state);
      this.setState({
        selectedIndex: newSelectedIndex,
      });
    }
    this.buttonsState();
  }

  backwardButtonHandler() {
    if (this.state.selectedIndex !== 0) {
      console.log("Backward button handler is called");
      this.setState((prevState, props) => {
        return {
          ...prevState,
          selectedIndex: prevState.selectedIndex - 1,
        };
      });
    }
    this.buttonsState();
  }

  buttonsState() {
    if (this.state.selectedIndex === 0) {
      this.setState({
        isFirst: true,
        isLast: false,
      });
    } else if (this.state.selectedIndex === 3) {
      this.setState({
        isFirst: false,
        isLast: true,
      });
    } else {
      this.setState({
        isFirst: false,
        isLast: false,
      });
    }
  }

  render() {
    return (
      <div className="image-container">
        <div className="image-container__image">
          <IconButton
            className={this.props.classes.imageButtton}
            onClick={this.backwardButtonHandler}
          >
            <ChevronLeftIcon />
          </IconButton>
          <img
            className="image-container__prop"
            src={this.state.images[this.state.selectedIndex]}
            alt="farm01"
          />
          <IconButton
            className={this.props.classes.imageButtton}
            onClick={this.forwardButtonHandler}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoginScreenImages);
