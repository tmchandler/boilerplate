import React from 'react';
import Donut from './Donut.jsx';

const DonutList = ({ dummydata }) => (
  <div>
    {dummydata.map(donut => {
      return <Donut key={donut.type_donut} donut={donut}/>
    })}
  </div>
)

export default DonutList;