import React from 'react';
import { Container, GradientBall } from './shared';

export function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[950px] bg-main'>
      {/* Сетка на фоне */}
      <div
        className='
    absolute inset-0 z-0  
    bg-main
    bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
    bg-[size:48px_48px]
    pointer-events-none
    [transform:perspective(600px)_rotateX(73deg)]  '
      />
      <GradientBall
        size={54}
        gradient='linear-gradient(150deg, #C7FFF0 24%, #38B2AC 100%)'
        className='absolute bottom-4 left-6'
      />
      <GradientBall
        size={54}
        gradient='linear-gradient(150deg, #C7FFF0 24%, #38B2AC 100%)'
        className='absolute bottom-30 right-30'
      />
      <GradientBall
        size={30}
        gradient='linear-gradient(180deg, #FFC371 0%, #FF8008 100%)'
        className='absolute top-30 right-30 '
      />
      <GradientBall
        size={30}
        gradient='linear-gradient(180deg, #FFC371 0%, #FF8008 100%)'
        className='absolute top-30 left-30 '
      />
      <Container className='relative z-10'>
        <h1 className='text-white text-[62px] font-bold'>BITCOINIST.ORG</h1>

        <div className='flex items-center mt-[140px] gap-[180px]'>
          <div className='max-w-[516px]'>
            <h2 className='text-[62px] font-bold text-white'>
              Pleb supported privacy focused public MATRIX server
            </h2>

            <button className='text-[28px] mt-[37px] button-gradient'>
              Join Matrix
            </button>
          </div>
          <div className='relative'>
            {/* Фон — больше, чем контейнер */}
            <img
              src='/bg-bitoc.png'
              alt='background'
              className='absolute z-0 !h-[677px] !max-w-[677px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 glow-lines'
            />

            {/* Коин — по размеру контейнера */}
            <img
              src='/bitoc.png'
              alt='coin'
              className='relative max-w-[465px] z-10 w-full h-full object-contain'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
