import React from 'react';

export default function ProfilePic(props) {
  let imageURL =
    localStorage.getItem('imageURL').length > 0
      ? localStorage.getItem('imageURL')
      : `https://cdn.mos.cms.futurecdn.net/jGzwyejNTQjgjWmap5cHUN-970-80.jpg.webp`;
  return (
    <div className=''>
      <img className='profilePic2' src={imageURL} />
      <h2>{localStorage.getItem('name')}</h2>
    </div>
  );
}
