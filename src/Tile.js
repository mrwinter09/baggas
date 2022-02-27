import React from 'react';
import './App.css';

function Tile({ title, text, }) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    )

}

export default Tile;