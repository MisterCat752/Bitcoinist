import React from 'react';
import { Hero, MatrixProtocol, MessengerInfo } from './components';

function App() {
  return (
    <div className='bg-main'>
      <Hero />
      <MessengerInfo />
      <MatrixProtocol />
    </div>
  );
}

export default App;
