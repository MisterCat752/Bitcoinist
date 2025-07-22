import React from 'react';
import { Container, GradientBall } from './shared';

const info = [
  'Open Source',
  'End-to-end encryption of correspondence and video calls by default',
  'No ads and no user data collection',
  'There is no connection to the phone number',
  'No blocking or censorship',
];
export function MatrixProtocol() {
  return (
    <div className='mt-[100px] relative'>
      <GradientBall
        size={44}
        gradient='linear-gradient(150deg, #C7FFF0 24%, #38B2AC 100%)'
        className='absolute top-0 right-30  '
      />
      <GradientBall
        size={30}
        gradient='linear-gradient(180deg, #FFC371 0%, #FF8008 100%)'
        className='absolute bottom-0  right-30 '
      />
      <GradientBall
        size={24}
        gradient='linear-gradient(150deg, #C7FFF0 24%, #38B2AC 100%)'
        className='absolute bottom-4 left-6'
      />
      <Container className='flex gap-2'>
        <div className='max-w-[500px]'>
          <h2 className='text-white text-3xl font-bold'>
            Matrix protocol is:{' '}
          </h2>
          {info.map((text, i) => (
            <div
              className='py-4 mb-2 px-5 flex items-center gap-5 bg-[linear-gradient(180deg,#344949_0%,#63909C_100%)] rounded-2xl'
              key={i}
            >
              <div className='w-4 h-4 min-w-[16px] min-h-[16px] bg-orange-medium rounded-sm rotate-45 flex-shrink-0' />
              <p className='text-[24px] text-white'>{text}</p>
            </div>
          ))}
        </div>

        {/* right */}

        <div>
          <img src='/chatgroup.png' alt='chatgroup' />
        </div>
      </Container>
    </div>
  );
}
