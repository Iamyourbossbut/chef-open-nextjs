'use client';

const ingreOnHandText = "Ingredients on hand:"

export default function IngredientsList(props) {
    return (
        <section className="ingredients-list-section">
            <h2>{ingreOnHandText}</h2>
            <ul className="ingredients-list">
                {props.ingredientsList}
            </ul>
        </section>
    )
}