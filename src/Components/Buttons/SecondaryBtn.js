import React from 'react';

export default function SecondaryBtn(props) {
  const text = props.text;
  return (
    <button className='secondaryBtn'>
      <strong>{text}</strong>
    </button>
  );
}
