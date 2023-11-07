import React from 'react';
import Author from '../components/Author';
import Button from '../components/Button';

const AuthorList = () => {
  // Fetch or generate author data here
  const authors = []; // Your authors data goes here

  return (
    <div>
      {authors.map((author, index) => (
        <Author key={index} name={author.name} />
      ))}
      <Button action="generate" />
      <Button action="share" />
    </div>
  );
};

export default AuthorList;
