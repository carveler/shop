import React from 'react';

export default function ProductDetail(props) {
  console.log(props);
  const { description } = props.location.state.product;
  return (
    <div>
      <div>{description}</div>
      <button onClick={() => props.history.goBack()}>Go back</button>
    </div>
  );
}
