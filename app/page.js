'use client';

import { useState, useEffect, useRef } from 'react'
import IngredientsList from "@/components/IngredientsList"
import GetRecipeBox from "@/components/GetRecipeBox"
import GeneratedRecipe from "@/components/GeneratedRecipe"

const mainText = "What's cooking today?"
const addIngredientsText = "Add Ingredients"

export default function Home() {
    const [ingredientsList, setIngredientsList] = useState([])
    const [recipe, setRecipe] = useState("") 
    const recipeSection = useRef(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (recipe != "" && recipeSection.current != null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    const ingredientsListJSX = ingredientsList.map((ingredient, index) => <li key={index + 1}>{ingredient}</li>)
    
    // Function for adding input ingredient to the list
    function addIngredient(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const ingredient = formData.get("ingredient")

        if (!ingredient.trim()) return

        setIngredientsList(ingredients => [
            ...ingredients, ingredient.trim()
        ])
        
        event.target.reset()
    }

    // Function to handle generate recipe securely
    async function handleGenerateRecipe() {
        try {
            const response = await fetch('/api/generate-recipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ingredients: ingredientsList
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate recipe')
            }

            setRecipe(data.recipe)
        } catch (error) {
            console.error('Error:', error)
            alert('Failed to generate recipe. Please try again.')
            setRecipe("")
        } finally {
            setLoading(false)
        }
    }

    const ingredientsListLength = ingredientsList.length

    return (
        <main className={ingredientsListLength == 0 ? "no-ingredients-view" : null}>
            {ingredientsListLength == 0 ? <p className="text">{mainText}</p> : null}
            <form method="GET" onSubmit={addIngredient} className="add-ingredients-form">
                <input required name="ingredient" type="text" placeholder="e.g. tomato" />
                <button>{addIngredientsText}</button>
            </form>
            {ingredientsListLength > 0 ? <IngredientsList
                ingredientsList={ingredientsListJSX}
            /> : null}
            {ingredientsListLength > 3 ? <GetRecipeBox
                ref={recipeSection}
                loading={loading}
                setLoading={setLoading}
                handleGenerateRecipe={handleGenerateRecipe}    
            /> : null}
            {recipe ? <GeneratedRecipe
                recipe={recipe}
            /> : null}
        </main>
    )
}