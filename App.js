import React from 'react';
import Navigator from './navigator/stack';
import About from './screens/About';

export default function App() {
  console.log('App component is rendering'); // Add this line for debugging

  return (
   // <About/>
    <Navigator />
  );
}
