# AI Recipe Generator
#### Video Demo: <URL HERE>
#### Description:

Ever opened your fridge and had no idea what to cook with the random stuff inside? That's exactly why I built this. You type in whatever ingredients you have, and it generates actual recipes you can make.

This started as me following React tutorials, but I wanted to build something more useful than another todo app. I used Next.js mainly because I needed a simple way to create an API endpoint that could talk to OpenAI without setting up a whole separate backend server.

## What It Actually Does

- You type ingredients like "chicken, rice, garlic"
- It sends that to OpenAI's API through my backend
- You get back a real recipe with instructions
- No login required, just use it

The frontend is React components handling the user interface, and I have one API route in Next.js that handles the OpenAI requests. Pretty straightforward.

## How I Built It

**React Foundation**: Started with basic React tutorials learning components, state, props - the usual stuff. Built some simple interactive components first.

**Adding the Backend**: This is where Next.js came in. Instead of learning Express and setting up a separate server, Next.js let me create an API route right in the same project. The `api/generate-recipe/route.js` file handles POST requests and talks to OpenAI.

**API Integration**: Had to figure out how to properly handle async requests, error states, and parsing the AI responses. Took some trial and error to get the prompts right so it actually generates useful recipes.

## File Structure

```
├── app/
│   ├── api/generate-recipe/route.js    # Backend API that talks to OpenAI
│   ├── page.js                         # Main page
│   └── layout.js                       # App wrapper
├── components/
│   ├── GetRecipeBox.jsx                # Input form for ingredients
│   ├── GeneratedRecipe.jsx             # Displays the recipe result
│   ├── IngredientsList.jsx             # Manages ingredient input
│   └── Header.jsx                      # Page header
```

## Main Components

**GetRecipeBox**: The main component where users type ingredients and click generate. Handles the form submission and API calls.

**GeneratedRecipe**: Takes the AI response and formats it nicely. Had to handle different response formats since AI doesn't always return perfectly structured data.

**IngredientsList**: Lets users add/remove ingredients dynamically. Uses React state to manage the list.

**API Route**: The backend endpoint that takes ingredients, formats them into a prompt, sends to OpenAI, and returns the recipe.

## Challenges I Ran Into

- **API Integration**: Getting the OpenAI responses to be consistent took some prompt engineering
- **Error Handling**: Had to account for API failures, network issues, and malformed responses
- **State Management**: Making sure ingredients and generated recipes update properly across components
- **Async Operations**: Learning to handle loading states and API calls properly

## What I Learned

- How to create API endpoints using Next.js instead of setting up Express
- Working with external APIs and handling their quirks
- Better React patterns for managing state between components
- That AI APIs can be unpredictable and you need good error handling

## Setup Instructions

1. Clone the repo and run `npm install`
2. Get an OpenAI API key
3. Create `.env.local` with `OPENAI_API_KEY=your_key`
4. Run `npm run dev`

**Note on API Key**: I didn't include my API key in the submitted code for security reasons. The app is fully functional with a valid OpenAI key.

## Why This Works as a CS50x Project

This demonstrates several important concepts:
- **Full-stack development**: Frontend React components + backend API
- **External API integration**: Real-world skill working with third-party services  
- **Independent learning**: Went beyond tutorials to implement Next.js API routes
- **Problem-solving**: Built something that solves an actual problem people have

I could have made it more complex with user accounts and saving recipes, but honestly it works well as is. Sometimes simple solutions are better than over-engineered ones.

The core functionality is solid - you can input ingredients and get working recipes. That's what I set out to build, and that's what it does.