import React from 'react'
import PropTypes from 'prop-types'

import Masonry from 'react-masonry-css'
import './RecipeHome.css'
import RecipeCard from './RecipeCard';

const breakpointColumnsObj = {
	default: 4,
	1100: 3,
	700: 2,
	500: 1
};

const RecipeHome = ({ recipes }) => {
	return (
		<div>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="recipe-grid"
				columnClassName="recipe-grid_column"
			>
				{recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
			</Masonry>
		</div>
	)
}

RecipeHome.propTypes = {
	recipes: PropTypes.array.isRequired
}

export default RecipeHome
