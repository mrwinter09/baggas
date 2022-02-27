import React from 'react';
import './App.css';
import Button from './Button.js';

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
        <Button
          title="pre-orders"
          disabled={true}
        />
      </nav>
    </>
  );
}
export default App;



