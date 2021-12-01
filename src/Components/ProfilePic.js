import React from 'react';

export default function ProfilePic(props) {
  let imageURL = props.imageURL
    ? props.imageURL
    : `https://cdn.mos.cms.futurecdn.net/jGzwyejNTQjgjWmap5cHUN-970-80.jpg.webp`;
  console.log(imageURL);
  return (
    <div className=''>
      <img className='profilePic2' src={imageURL} />
    </div>
  );
}
