'use client';

import ReactMarkdown from 'react-markdown'

export default function GeneratedRecipe(props) {
    return (
        <section className="recipe-section">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}