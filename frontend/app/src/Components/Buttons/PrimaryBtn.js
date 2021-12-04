import React from 'react';

export default function SignInButton(props) {
  const text = props.text;
  const position = props.position || 'static';
  const right = props.right || '';
  const top = props.top || '';
  return (
    <button
      className='primaryBtn'
      style={{ position: position, right: right, top: top }}
      type='submit'
    >
      <strong>{text}</strong>
    </button>
  );
}
