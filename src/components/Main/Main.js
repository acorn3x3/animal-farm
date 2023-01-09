import React from 'react';
import './Main.css';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';

//import background  here
import background from '../../background.png';
//set background here

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((item) => (
        <Animal key={item.name} {...item} />
      ))}
    </main>
  );
}
//main should .map through and render Animal component for each animal
