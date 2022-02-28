import React from 'react';
import './App.css';

function Tile({ title, text, image }) {
    return (
        <section>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    )

}

export default Tile;