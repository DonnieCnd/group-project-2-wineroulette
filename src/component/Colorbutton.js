import React, { Component } from "react";
import Redsubcriterion from "./Redsubcriterion";
import Whitesubcriterion from "./Whitesubcriterion";
import Rosesubcriterion from "./Rosesubcriterion";
import Champsubcriterion from "./Champsubcriterion";
import "../style/Colorbutton.css";

import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BoutonReset from "./BoutonReset";

const styles = theme => ({
  buttonSelected: {
    margin: theme.spacing.unit,
    backgroundColor: "#603d8b",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    "&:hover": {
      backgroundColor: "#603d8b"
    }
  },

  buttonNotSelected: {
    margin: theme.spacing.unit,
    backgroundColor: "#B7143F",
    "&:hover": {
      backgroundColor: "#603d8b",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  },

  input: {
    display: "none"
  }
});

class Colorbutton extends Component {
  constructor() {
    super();
    this.state = {
      color: ["Red Wine"],
      subCategory: ""
    };
  }

  ColorSelection = (color, subCategory) => {
    this.setState({ color: color });
    this.setState({ subCategory: subCategory });
    this.props.liftColor(color);
    this.props.liftsubStyle("");
    this.props.liftsubCategory(subCategory);
  };

  liftReset = () => {
    window.location.reload();
    window.location.href = "./";
  };
  
  render() {
    const { classes } = this.props;

    if (true)
      return (
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="subCriterionsReset"
            spacing={0}
          >
            <Grid className="gridDivUseless" item xs={4} sm={2} md={2} lg={4}>
              <div></div>
            </Grid>
            <Grid className="gridButtons" item xs={4} sm={8} md={8} lg={4}>
              <Button
                variant="contained"
                color="secondary"
                className={
                  this.state.color[0] === "Red Wine"
                    ? classes.buttonSelected
                    : classes.buttonNotSelected
                }
                onClick={() => this.ColorSelection(["Red Wine"], "style")}
              >
                Red
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={
                  this.state.color[0] === "White Wine"
                    ? classes.buttonSelected
                    : classes.buttonNotSelected
                }
                onClick={() =>
                  this.ColorSelection(["White Wine"], "sugar_content")
                }
              >
                White
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={
                  this.state.color[0] === "Rosé Wine"
                    ? classes.buttonSelected
                    : classes.buttonNotSelected
                }
                onClick={() => this.ColorSelection(["Rosé Wine"], "style")}
              >
                Rosé
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={
                  this.state.color[0] === "Champagne"
                    ? classes.buttonSelected
                    : classes.buttonNotSelected
                }
                onClick={() =>
                  this.ColorSelection(
                    ["Champagne", "Sparkling Wine"],
                    "sugar_content"
                  )
                }
              >
                Sparkling
              </Button>

              {/* <{this.state.color === "Champagne"
            ? Whitesubcriterion
            : Redsubcriterion} liftsubStyle={this.props.liftsubStyle} /> */}
            </Grid>
            <Grid className="gridReset" item xs={4} sm={2} md={2} lg={4}>
              <BoutonReset liftReset={this.liftReset} />
            </Grid>
          </Grid>
          <div className="divUseless" />

          {this.state.color[0] === "Red Wine" && (
            <Redsubcriterion liftsubStyle={this.props.liftsubStyle} />
          )}
          {this.state.color[0] === "White Wine" && (
            <Whitesubcriterion liftsubStyle={this.props.liftsubStyle} />
          )}
          {this.state.color[0] === "Rosé Wine" && (
            <Rosesubcriterion liftsubStyle={this.props.liftsubStyle} />
          )}
          {this.state.color[0] === "Champagne" && (
            <Champsubcriterion liftsubStyle={this.props.liftsubStyle} />
          )}

          <div className="divUseless2" />
        </div>
      );

    {
      /* {this.state.color} === "Red Wine" ? return <Redsubcriterion liftsubStyle={this.props.liftsubStyle} /> : ""
       */
    }
  }
}

Colorbutton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Colorbutton);
