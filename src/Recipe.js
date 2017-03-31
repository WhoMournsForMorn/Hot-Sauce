import React, {Component} from 'react';
import IngredientList from './IngredientList';
import { Button } from 'react-bootstrap';

class Recipe extends Component {
	constructor(props) {
		super(props);
		this.removeRecipe = this.removeRecipe.bind(this);
	}

	removeRecipe() {
		this.props.removeRecipe(this.props.id);
	}

	render() {
		return(
			<div className="list-group-item">
				<h2>{this.props.name}</h2>
				<IngredientList />
				<Button bsSize="xsmall" onClick={this.removeRecipe}>Delete Recipe</Button>
			</div>)
	}
}

export default Recipe;