import React, {Component} from 'react';
import './Ingredient.css';

class Ingredient extends Component {
	constructor(props) {
		super(props);
		this.state = { stricken: false, strikeThrough: '' };
		this.strikeThrough = this.strikeThrough.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
	}

	removeIngredient() {
		this.props.removeIngredient(this.props.id);
	}

	strikeThrough() {
		this.state.stricken ? this.setState({ stricken: false, strikeThrough: '' }) : this.setState({ stricken: true, strikeThrough: 'strikethrough' });
	}

	render() {
		return (
				<div className="Ingredient" >
					<span className={this.state.strikeThrough} onClick={this.strikeThrough} >{this.props.name} <strong>{this.props.measurement}</strong></span>
					&nbsp;
					<button onClick={this.removeIngredient}>Remove</button>
				</div>
		);
	}
}

export default Ingredient;