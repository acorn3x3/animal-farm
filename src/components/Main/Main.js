import React from 'react';
import './Main.css';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';

//import background  here
import background from '../../background.png';
//set background here

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          top={animal.top}
          left={animal.left}
        />
      ))}
    </main>
  );
}
//main should .map through and render Animal component for each animal
