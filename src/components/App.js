import React, { useEffect, useState } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching the dog image:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <img src={dogImage} alt="A Random Dog" />;
};

export default App;
// create your App component here
