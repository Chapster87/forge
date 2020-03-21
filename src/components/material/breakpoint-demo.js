import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.typography.display1,
    padding: theme.spacing.unit * 4,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    // Display the name of the current breakpoint
    "&::before": {
      [theme.breakpoints.down("sm")]: {
        content: `'Screen size = xs'`
      },
      [theme.breakpoints.up("sm")]: {
        content: `'Screen size = sm'`
      },
      [theme.breakpoints.up("md")]: {
        content: `'Screen size = md'`
      },
      [theme.breakpoints.up("lg")]: {
        content: `'Screen size = lg'`
      },
      [theme.breakpoints.up("xl")]: {
        content: `'Screen size = xl'`
      }
    }
  }
});

function Demo({ classes }) {
  return <div className={classes.root} />;
}

Demo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Demo);
