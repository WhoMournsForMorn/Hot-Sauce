import React, { Component } from 'react';
import './AddRecipe.css';

class AddRecipe extends Component {
	constructor(props) {
		super(props);
		this.state = { id: '', name: '' };
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addRecipe = this.addRecipe.bind(this);
	}

	addRecipe() {
		const uuidV4 = require('uuid/v4');
		this.props.addRecipe({ id: uuidV4(), name: this.state.name});
		this.setState({ id: '', name: ''});
	}

	handleUpdate(event) {
		this.setState({ name: event.target.value });
	}

	render() {
		return(
			<div className="AddRecipe">
				<input
					type="text"
					onChange={this.handleUpdate}
					placeholder="Recipe"
					value={this.state.name}
				/>
				&nbsp;&nbsp;
				<button onClick={this.addRecipe}>Add</button>
			</div>
		)
	}
}
export default AddRecipe;