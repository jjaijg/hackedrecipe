import React from 'react'
import PropTypes from 'prop-types'

const RecipeCategory = ({ categories }) => {
    return (
        <div>
            {categories.length && <select name="recipeCategory" id="recipeCategory">
                {categories.map((category, ind) => <option value={category}>{category}</option>)}
            </select>}
        </div>
    )
}

RecipeCategory.propTypes = {
    categories: PropTypes.array.isRequired
}

export default RecipeCategory
