import React from 'react';
import './App.css';
import Button from './Button.js';
import Product from './Product';
import Tile from './Tile';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button
          text="to the collection"
          title="to the collection"
        />
        <Button
          text="shop all bags"
          title="shop all bags"
        />
        <Button
          title="pre-orders"
          disabled={true}
        />
      </nav>
      <main>
        <Product
          label="Best seller"
          image={bag_1}
          title="The handy bag"
          price="€400,-"
        />
        <Product
          label="Best seller"
          image={bag_2}
          title="The stylish bag"
          price="€250,-"
        />
        <Product
          label="New collection"
          image={bag_3}
          title="The simple bag"
          price="€300,-"
        />
        <Product
          label="New collection"
          image={bag_4}
          title="The trandy bag"
          price="€150,-"
        />
      </main>
      <footer>
        <Tile
          title="The Brand"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc id cursus. Tempus imperdiet nulla malesuada pellentesque elit eget."
        />
        <Tile
          image={brand}
        />
        <Tile
          image={our_story}
        />
        <Tile
          title="Our Story"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc id cursus. Tempus imperdiet nulla malesuada pellentesque elit eget."
        />

      </footer>
    </>
  );
}
export default App;



