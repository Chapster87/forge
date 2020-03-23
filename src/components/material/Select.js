import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Select from '@material-ui/core/Select';
import selectStyle from "../../assets/jss/material-kit-react/components/selectStyle.js";

const makeComponentStyles = makeStyles(() => ({
  ...selectStyle
}));

const RegularSelect = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const selectClasses = classNames({
    [classes.select]: true,
    [className]: className
  });
  return (
    <Select {...rest} ref={ref} className={selectClasses}>
      {children}
    </Select>
  );
});

RegularSelect.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default RegularSelect;