import React, {Component} from 'react';
import IngredientList from './IngredientList';
import './Recipe.css';

class Recipe extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	removeRecipe() {
		this.props.removeRecipe(this.props.id);
	}

	render() {
		return(
			<div className="Recipe">
				<h2>{this.props.name}</h2>
				<IngredientList />
			</div>)
	}
}

export default Recipe;