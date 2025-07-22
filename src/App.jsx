import React from 'react';
import {
  BitcoinistServer,
  Hero,
  MatrixProtocol,
  MessengerInfo,
} from './components';

function App() {
  return (
    <div className='bg-main'>
      <Hero />
      <MessengerInfo />
      <MatrixProtocol />
      <BitcoinistServer />
    </div>
  );
}

export default App;
