import React from 'react';

const Result = (props) => {
//   if(!props.result) return null;
  return (
    <>
    <h3>Congrualation! The highest price of the property which you can afford is :£{props.result}</h3>
    </>
  )
}

export default Result;