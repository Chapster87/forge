import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputLabel from '@material-ui/core/InputLabel';
import labelStyle from "../../assets/jss/material-kit-react/components/labelStyle.js";

const makeComponentStyles = makeStyles(() => ({
  ...labelStyle
}));

const RegularLabel = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const labelClasses = classNames({
    [classes.label]: true,
    [className]: className
  });
  return (
    <InputLabel {...rest} ref={ref} className={labelClasses}>
        {children}
    </InputLabel>
  );
});

RegularLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default RegularLabel;