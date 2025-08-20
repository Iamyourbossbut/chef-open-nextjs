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
├── .gitignore
├── README.md
├── app/
│   ├── api/
│   │   └── generate-recipe/
│   │       └── route.js                # Backend API that talks to OpenAI
│   ├── globals.css                     # Styling
│   ├── layout.js                       # App wrapper
│   └── page.js                         # Main page with ingredient input
├── components/
│   ├── GeneratedRecipe.jsx             # Displays formatted recipe
│   ├── GetRecipeBox.jsx                # "Get Recipe" button component
│   ├── Header.jsx                      # Static navbar
│   └── IngredientsList.jsx             # Displays ingredient list
├── next.config.mjs
├── package.json
└── public/
    └── chef.png                        # Logo image
```

## Main Components

**page.js**: This is where the actual ingredient input happens. Users type ingredients and add them to their list. Once they have at least 4 ingredients, the "Get Recipe" button appears.

**GetRecipeBox**: "Get a Recipe" button that only shows up after you've entered atleast 4 or more ingredients. When clicked, it handles the API call and loading state.

**GeneratedRecipe**: Takes the AI response (which I told the AI to format as markdown) and uses the react-markdown library to convert it into proper HTML elements. This makes the recipes look clean and formatted.

**IngredientsList**: Just displays the ingredients you've entered in a nice list format. Gets the ingredient data passed down as props from page.js.

**Header**: Static navbar with just the logo and app name.

## Challenges I Ran Into

- **UI Logic**: The "Get a Recipe" button only appears once you have 4 or more ingredients, which makes the UX smoother
- **Markdown Formatting**: Getting the AI to return markdown and then converting it with react-markdown for proper formatting
- **Component Structure**: Separating concerns properly - page.js handles input, components handle display

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