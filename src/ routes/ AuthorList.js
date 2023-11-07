import React, { useEffect, useState } from 'react';
import Author from '../components/Author';
import Button from '../components/Button';

const AuthorList = () => {
  // State to store the authors data
  const [authors, setAuthors] = useState([]);

  // Function to fetch author data from an API
  const fetchAuthorsData = async () => {
    try {
      const response = await fetch('http://localhost:3001'); // Replace with your API endpoint
      if (response.ok) {
        const data = await response.json();
        setAuthors(data);
      } else {
        console.error('Failed to fetch authors data');
      }
    } catch (error) {
      console.error('Error fetching authors data:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchAuthorsData();
  }, []);

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
