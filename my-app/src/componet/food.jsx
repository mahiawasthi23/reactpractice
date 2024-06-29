import React from 'react';
import Breakfast from './breakfast';
import Lunch from './lunch';
import Dinner from './dinner';

let time = 'morning';
function Food() {
  let mealComponent;

  switch (time) {
    case 'morning':
      mealComponent = <Breakfast food="juice,  Sandwich,  salad" />;
      break;
    case 'afternoon':
      mealComponent = <Lunch food="Sabaji,  Roti,   Dal,  Rice" />;
      break;
    case 'night':
      mealComponent = <Dinner food="Bhal,   Biscuit,    Namkeen" />;
      break;
    default:
      mealComponent = null;
  }

  return (
      mealComponent
  );
}

export default Food;
