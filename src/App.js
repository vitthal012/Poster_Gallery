import React from 'react';
import Header from './components/Header';
import p1 from './posters/1.png';
import p2 from './posters/2.png';
import p3 from './posters/3.png';
import Cardslis from './components/newposterlist';

function App() {
  const poster = [
    { image: p1 },
    { image: p2 },
    { image: p3 },
  ];

  return (
    <>
      <Header />
      <Cardslis posters={poster} />
    </>
  );
}

export default App;
