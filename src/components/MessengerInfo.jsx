import React from 'react';
import { Container, GradientBall } from './shared';
import { ComparisonTable } from './ComparisonTable';

export function MessengerInfo() {
  return (
    <div className='relative min-h-[985px] bg-main mt-[120px]'>
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
        className='absolute top-30 left-30 '
      />
      <Container className='flex gap-[80px] items-center justify-center'>
        <div className='relative   flex items-center justify-center'>
          {/* Градиентный шар */}
          <GradientBall
            size={350}
            gradient='linear-gradient(150deg, #C7FFF0 24%, #38B2AC 70%)'
            glowColor='rgba(48,255,192,0.25)'
            className='relative top-0 left-0'
          />
          {/* Картинка телефона поверх шара */}
          <img
            src='/phone.png'
            alt=''
            className='absolute z-10  inset-0 m-auto max-h-[90%] max-w-[90%] drop-shadow-2xl'
            style={
              {
                // Можно кастомизировать позицию/размер:
                // top: 30px, left: 20px, etc.
                // transform: "rotate(-8deg)", // если нужно немного повернуть
              }
            }
          />
        </div>
        <div>
          <ComparisonTable />
        </div>
      </Container>
    </div>
  );
}
