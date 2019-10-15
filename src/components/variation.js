import React, { Component } from 'react'
import VariationSelect from './variationSelect'

class Variation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value: 'coconut'};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	selectCallback = (variationData) => {
		this.setState({value: variationData})
	}

	handleSubmit(event) {
		alert('Your favorite flavor is: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div class="form-row">
					<div class="form-group col-6">
						<VariationSelect data={this.props.data} variationCallback={this.selectCallback}/>
					</div>
				</div>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Variation;