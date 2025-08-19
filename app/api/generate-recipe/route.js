import OpenAI from "openai"

const systemPrompt = `You are an assistant that receives a list of 
ingredients that a user has and suggests a recipe they could make 
with some or all of those ingredients. You don't need to use every 
ingredient they mention in your recipe. The recipe can include 
additional ingredients they didn't mention, but try not to include 
too many extra ingredients. Format your response in markdown to 
make it easier to render to a web page`

const app = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

// Function to get the recipe
async function generateRecipe(ingredients) {
    const response = await app.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: `Ingredients: ${ingredients.join(", ")}` }
        ],
    })
    return response.choices[0].message.content
}

// Next.js route
export async function POST(request) {
    try {
        const { ingredients } = await request.json()
        
        if (!ingredients || ingredients.length === 0) {
            return Response.json({ error: 'Please provide ingredients' }, { status: 400 })
        }

        const recipe = await generateRecipe(ingredients)
        return Response.json({ recipe })

    } catch (error) {
        console.error('Recipe generation error:', error)
        
        // Handle specific OpenAI errors
        if (error.status === 401) {
            return Response.json({ error: 'API key invalid' }, { status: 500 })
        }
        
        return Response.json(
            { error: 'Failed to generate recipe', message: error.message },
            { status: 500 }
        )
    }
}