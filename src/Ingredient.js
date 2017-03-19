import React, {Component} from 'react';
import './Ingredient.css';

class Ingredient extends Component {
	constructor(props) {
		super(props);
		this.state = { stricken: false };
		this.strikeThrough = this.strikeThrough.bind(this);
	}

	strikeThrough() {
		this.setState({ stricken: !this.state.stricken });
	}

	render() {
		return (
			<div className="Ingredient" strikeThrough={this.state.stricken} >
				{this.props.quantity} <strong>{this.props.name}</strong>
			</div>
		);
	}
}

export default Ingredient;