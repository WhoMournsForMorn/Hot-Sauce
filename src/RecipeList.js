import React, {Component} from 'react';
import AddRecipe from './AddRecipe';
import Recipe from './Recipe';

class RecipeList extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: [{ id: 123, name: 'Jalapeno Sauce'}] };
		this.addRecipe = this.addRecipe.bind(this);
	}

	addRecipe(newRecipe) {
		this.setState({ recipes: [...this.state.recipes, newRecipe] });
	}

	removeRecipe(removeRecipe) {
		const filteredRecipes = this.state.recipes.filter(recipe => {
			return recipe.id !== removeRecipe;
		})
		this.setState({ recipes: filteredRecipes });
	}

	renderRecipes() {
		return this.state.recipes.map(item => (
			<Recipe
			key={item.id}
			id={item.id}
			name={item.name}
			removeRecipe={this.removeRecipe} />
		));
	}

	render() {
		return(
			<div className="RecipeList">
				{this.renderRecipes()}
				<AddRecipe addRecipe={this.addRecipe} />
			</div>)
	}
}

export default RecipeList;