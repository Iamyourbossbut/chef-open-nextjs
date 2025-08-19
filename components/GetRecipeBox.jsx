'use client';

const mainGRText = "Ready for a recipe?"
const paraGRText = "Generate a recipe from your list of ingredients."
const buttonGRText = "Get a Recipe"

export default function GetRecipeBox(props) {
    return (
        <div className="get-recipe_box_section" ref={props.ref}>
            <div>
                <h3>{mainGRText}</h3>
                <p>{paraGRText}</p>
            </div>
            <button
                onClick={() => {
                    props.handleGenerateRecipe()
                    props.setLoading(true)
                }}
            >
                {!props.loading ? buttonGRText : null}
                {props.loading ? <span className="spinner"></span>: null}
            </button>
        </div>
    )
}