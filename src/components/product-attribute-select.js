import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from "./material/InputLabel.js";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from './material/Select.js';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ProductAttributeSelect = ({ attribute, onAttrUpdate }) => {
    const classes = useStyles();
    const [activeOption, setActiveOption] = React.useState('');

    const updateAttr = (e) => {
        setActiveOption(e.target.value);
        onAttrUpdate(e.target.value);
    }

    if (!attribute.visible) {
        return null;
    }

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="prod-attr-select-label">{`Select ${attribute.name}`}</InputLabel>
            <Select 
                labelId="prod-attr-select-label"
                id="prod-attr-select"
                value={activeOption}
                autoWidth={true}
                onChange={(e) => updateAttr(e)}
                aria-label={`Select a ${attribute.name}`}
                >
                    {attribute.options.map((option) => (
                        <MenuItem value={option} key={option}>
                            {option}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    );
};

ProductAttributeSelect.propTypes = {
    attribute: PropTypes.object.isRequired
};

export default ProductAttributeSelect;