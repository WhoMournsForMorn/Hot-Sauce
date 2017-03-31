import React, {Component} from 'react';
import AddRecipe from './AddRecipe';
import Recipe from './Recipe';
import { ListGroup } from 'react-bootstrap';

class RecipeList extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: [] };
		this.addRecipe = this.addRecipe.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
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
				<ListGroup>
					{this.renderRecipes()}
				</ListGroup>
				<AddRecipe addRecipe={this.addRecipe} />
			</div>)
	}
}

export default RecipeList;