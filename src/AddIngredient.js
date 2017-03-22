import React, { Component } from 'react';
import './AddIngredient.css';

class AddIngredient extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', measurement: '' };
		// this.handleNameUpdate = this.handleNameUpdate.bind(this);
		// this.handleMeasurementUpdate = this.handleMeasurementUpdate.bind(this);
		this.addIngredient = this.addIngredient.bind(this);
	}

	addIngredient() {
		this.props.addIngredient({name: this.state.name, measurement: this.state.measurement});
		this.setState({  name: '', measurement: ''});
	}

	handleChange(name, event) {
		let change = {};
		change[name] = event.target.value;
		this.setState(change);
	}

	// handleNameUpdate(event) {
	// 	this.setState({name: event.target.value });
	// }

	// handleMeasurementUpdate(event) {
	// 	this.setState({ measurement: event.target.value });
	// }

	render() {
		return(
			<div className="AddIngredient">
				<input
					type="text"
					// onChange={this.handleNameUpdate}
					onChange={this.handleChange.bind(this, 'name')}
					placeholder="Ingredient"
					value={this.state.name}
				/>
				<input
					type="text"
					// onChange={this.handleMeasurementUpdate}
					onChange={this.handleChange.bind(this, 'measurement')}
					placeholder="Measurement"
					value={this.state.measurement}
				/>
				&nbsp;&nbsp;
				<button onClick={this.addIngredient}>Add</button>
			</div>
		)
	}
}
export default AddIngredient;