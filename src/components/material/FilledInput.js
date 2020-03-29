import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FilledInput from '@material-ui/core/FilledInput';
import filledInputStyle from "../../assets/jss/material-kit-react/components/filledInputStyle.js";

const makeComponentStyles = makeStyles(() => ({
  ...filledInputStyle
}));

const RegularFilledInput = React.forwardRef((props, ref) => {
    const {
      children,
      className,
      ...rest
    } = props;
  
    const classes = makeComponentStyles();
  
    const filledInputClasses = classNames({
      [classes.filledInput]: true,
      [className]: className
    });
    return (
      <FilledInput {...rest} ref={ref} className={filledInputClasses}/>
    );
  });
  
  RegularFilledInput.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };
  
  export default RegularFilledInput;