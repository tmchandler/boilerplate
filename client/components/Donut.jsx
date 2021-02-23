import React from 'react';

const Donut = ({ donut }) => (
  <div>
    <h1>{donut.type_donut}</h1>
    <h1>Has Sprinkles:{donut.sprinkles}</h1>
    <h1>${donut.price}</h1>
  </div>
)

export default Donut;
// {
//   "id": 1,
//   "quantity": 10,
//   "type_donut": "jelly",
//   "sprinkles": 1,
//   "price": 1.2
// },