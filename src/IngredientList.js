import React, {Component} from 'react';
import AddIngredient from './AddIngredient'
import Ingredient from './Ingredient'

class IngredientList extends Component {
	constructor(props) {
		super(props);
		this.state = { ingredients: [] };
		this.addIngredient = this.addIngredient.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
	}

	addIngredient(newIngedient) {
		this.setState({ ingredients: [...this.state.ingredients, newIngedient] });
	}

	removeIngredient(removeIngredient) {
		const filteredIngredients = this.state.ingredients.filter(ingredient => {
			return ingredient.id !== removeIngredient;
		})
		this.setState({ ingredients: filteredIngredients });
	}

	renderIngedients() {
		return this.state.ingredients.map(item => (
			<Ingredient
			key={item.id}
			id={item.id}
			name={item.name}
			measurement={item.measurement}
			removeIngredient={this.removeIngredient}/>
		));
	}

	render() {
		return (
			<div className="IngredientList">
				{this.renderIngedients()}
				<AddIngredient addIngredient={this.addIngredient} />
			</div>
		);
	}
}

export default IngredientList;