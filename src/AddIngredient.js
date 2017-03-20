import React, { Component } from 'react';
import './AddIngredient.css';

class AddIngredient extends Component {
	constructor(props) {
		super(props);
		this.state = { ingredientName: '',
					   ingreditnetQuantity: '' };
		this.handleNameUpdate = this.handleNameUpdate.bind(this);
		this.handleQuantityUpdate = this.handleQuantityUpdate.bind(this);
		this.addIngredient = this.addIngredient.bind(this);
	}

	addIngredient() {
		this.props.addIngredient(this.state.ingredientName, this.state.ingredientQuantity);
		this.setState({ ingredientName: '', ingredientQuantity: '' });
	}

	handleNameUpdate(event) {
		this.setState({ ingredientName: event.target.value });
	}

	handleQuantityUpdate(event) {
		this.setState({ ingredientQuantity: event.target.value });
	}

	render() {
		return(
			<div className="AddIngredient">
				<input
					type="text"
					onChange={this.handleNameUpdate}
					placeholder="Ingredient"
					value={this.state.ingredientName}
				/>
				<input
					type="text"
					onChange={this.handleQuantityUpdate}
					placeholder="Measurement"
					value={this.state.ingredientQuantity}
				/>
				&nbsp;&nbsp;
				<button onClick={this.addIngredient}>Add</button>
			</div>
		)
	}
}