import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#B7143F"
  },
  input: {
    display: "none"
  }
});
//import Appelapi from "./AppelAPI"

class Rosesubcriterion extends Component {
  constructor() {
    super();
    this.state = { roseSubCriterion: "" };
  }

  roseSubCriterionSelection = subStyle => {
    this.setState({ roseSubCriterion: subStyle });
    this.props.liftsubStyle(subStyle);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.roseSubCriterionSelection(["Easygoing & Fruity"])}
        >
          Fruity
        </Button>
        
		<Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() =>
            this.roseSubCriterionSelection(["Medium-bodied & Dry"])
          }
        >
          Dry
        </Button>

		<Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() =>
            this.roseSubCriterionSelection(["Soft & Off-dry", null])
          }
        >
          Surprise !
        </Button>

      </div>
    );
  }
}


Rosesubcriterion.propTypes = {
	classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(Rosesubcriterion);
  