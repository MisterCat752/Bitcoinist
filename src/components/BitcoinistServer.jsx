import React from 'react';
import { Container, InfoBlock } from './shared';

export function BitcoinistServer() {
  return (
    <div className='bg-gray/50 relative mt-[100px] min-h-[683px]'>
      <img
        src='/bg.png'
        className='absolute right-0 top-0 h-full object-cover z-0 pointer-events-none select-none'
        style={{ maxWidth: '52%' }}
        alt=''
        aria-hidden='true'
      />
      <Container className='pt-10 relative z-10'>
        <h2 className='   text-[48px] font-bold mb-10 text-white text-center'>
          Bitcoinist server is:
        </h2>
        <div className='grid grid-cols-4 grid-rows-2   gap-6   max-h-[400px]  '>
          <div className='flex flex-col gap-6'>
            <InfoBlock text='24/7 Security monitoring' img='/secure.png' />
            <InfoBlock text={`DDOS\nProtection`} img='/protect.png' />
          </div>
          <div className='flex flex-col gap-6'>
            <InfoBlock
              text='Easy password reset via e-mail'
              img='/password.png'
            />
            <InfoBlock text='Latest software updates' img='/recycle.png' />
          </div>
          {/* 2 высоких блока справа */}
          <div className='col-start-3 row-span-2 rounded-xl     text-white     '>
            <InfoBlock
              title='10Gbps'
              text='Dedicated server in the Finland'
              img='/speed.png'
            />
          </div>
          <div className='col-start-4 row-span-2 rounded-xl    text-white '>
            <InfoBlock
              title='100MB'
              text='Large file limits (up to 100MB)'
              img='/cloud.png'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
