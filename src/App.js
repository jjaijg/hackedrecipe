import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeHome from './components/RecipeHome';
import * as recipeServices from './services/recipeServices';

function App() {

	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		const getRecipes = async () => {

			try {
				const recipes = await recipeServices.getRecipes()
				setRecipes(recipes)
			} catch (error) {
				console.log(error)
			}
		}
		getRecipes()
	}, [])

	return (
		<div className="hackedrecipe">
			<RecipeHome recipes={recipes} />
		</div>
	);
}

export default App;
