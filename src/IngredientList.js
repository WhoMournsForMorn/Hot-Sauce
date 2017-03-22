import React, {Component} from 'react';
import AddIngredient from './AddIngredient'
import Ingredient from './Ingredient'

class IngredientList extends Component {
	constructor(props) {
		super(props);
		this.state = { ingredients: [{ name: 'salt', measurement: '2%' }, { name: 'Jalapenos', measurement: '500g' }, { name: 'whey', measurement: '2%' }] };
		this.addIngredient = this.addIngredient.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
	}

	addIngredient(newIngedient) {
		this.setState({ ingredients: [...this.state.ingredients, newIngedient] });
		console.log(this.state.ingredients);
	}

	removeIngredient(removeIngredient) {
		const filteredIngredients = this.state.ingredients.filter(ingredient => {
			return ingredient !== removeIngredient;
		})
		this.setState({ ingredients: filteredIngredients });
	}

	renderIngedients() {
		return this.state.ingredients.map(item => (
			<Ingredient
			key={item.name + (new Date())} // I am cheating here for a unique key
			name={item.name}
			measurement={item.measurement}
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