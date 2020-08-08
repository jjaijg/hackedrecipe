import React from 'react'
import PropTypes from 'prop-types'

import './RecipeCard.css'

const RecipeCard = ({ recipe }) => {

	const { id, name, image, label, category, description, price } = recipe

	return (
		<div className="recipe-card" style={{ backgroundImage: `url(${image})` }}>
			{/* label  */}
			<span className="recipe-badge">{label}</span>
			{/* category  */}
			<span className="recipe-badge">{category}</span>
			{/* image  */}
			{/* Recipe name  */}
			<h2 className="recipe-title">{name}</h2>
			{/* description  */}
			<p className="recipe-description">{description}</p>
		</div>
	)
}

RecipeCard.propTypes = {
	recipe: PropTypes.object.isRequired
}

export default RecipeCard
