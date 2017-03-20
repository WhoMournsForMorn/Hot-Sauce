import React, {Component} from 'react';
import AddIngredient from './AddIngredient'
import ingredient from './Ingredient'

class IngredientList extends Component {
	constructor(props) {
		super(props);
		this.state = { ingredientName: '', ingredientQuantity: '' };
		this.addIngredient = this.addIngredient.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
	}

	addIngredient(newIngedient) {
		this.setState({ ingredients: [...this.state.ingredients, newIngedient] });
	}

	removeIngredient(removeName) {
		const filteredIngredients = this.state.ingredients.filter(name => {
			return name !== removeName;
		})
		this.setState({ ingredients: filteredIngredients });
	}

	renderIngedients() {
		return this.state.ingredients.map(name => (
			<ingredient
			key={name + (new Date())} // I am cheating here for a unique key
			name={name}
			quantity={quantity}
			removeIngredient={this.removeIngredient}/>
		));
	}

	render() {
		return (
			<div className="IngredientList">
				<AddIngredient addIngredient={this.addIngredient} />
				{this.renderIngedients()}
			</div>
		);
	}
}

export default IngredientList;