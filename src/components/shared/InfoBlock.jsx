import React from 'react';

export function InfoBlock({ title, text, img }) {
  return (
    <div className='   border py-[24px] px-[54px] w-full   h-full bg-[#232323]/50  rounded-2xl '>
      <img className='h-20 w-20 mx-auto' src={img} alt={title} />
      {title && <h2 className='text-4xl font-bold text-white'>{title}</h2>}
      <p className='text-white  text-center text-[20px] whitespace-pre-line text'>
        {text}
      </p>
    </div>
  );
}
