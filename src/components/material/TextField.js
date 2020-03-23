import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import textFieldStyle from "../../assets/jss/material-kit-react/components/textFieldStyle.js";

const makeComponentStyles = makeStyles(() => ({
  ...textFieldStyle
}));

const RegularTextField = React.forwardRef((props, ref) => {
    const {
      children,
      className,
      ...rest
    } = props;
  
    const classes = makeComponentStyles();
  
    const textFieldClasses = classNames({
      [classes.textField]: true,
      [className]: className
    });
    return (
      <TextField {...rest} ref={ref} className={textFieldClasses}/>
    );
  });
  
  RegularTextField.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };
  
  export default RegularTextField;