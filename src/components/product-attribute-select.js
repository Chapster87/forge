import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const ProductAttributeSelect = ({ attribute }) => {
    const [activeOption, setActiveOption] = React.useState('');

    if (!attribute.visible) {
        return null;
    }

    return (
        <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" value={activeOption} onChange={(e) => setActiveOption(e.target.value)} aria-label={`Select a ${attribute.name}`}>
                <option value="">{`Select ${attribute.name}`}</option>
                {attribute.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </Input>
        </FormGroup>
    );
};

ProductAttributeSelect.propTypes = {
    attribute: PropTypes.object.isRequired,
};

export default ProductAttributeSelect;