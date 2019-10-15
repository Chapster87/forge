import React, { Component, Fragment } from 'react'

class VariationSelect extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value: 'coconut'};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		this.props.variationCallback(event.target.value);
	}

	render() {
		return (
			<React.Fragment>
				<label for="inputState">Select:</label>
				<select id="inputState" class="form-control" value={this.state.value} onChange={this.handleChange}>
					<option selected>Choose...</option>
					{this.props.data.skus.map(variation => {
						return (
							<option id={variation.id}>{variation.attributes.name} - ${variation.price / 100}.00</option>
						)
					})}
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>
			</React.Fragment>
		);
	}
}

export default VariationSelect;