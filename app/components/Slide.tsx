import React from 'react';
import Image from 'next/image';

interface PropsType {
  img: string;
  title: string;
}

const Slide: React.FC<PropsType> = ({ img, title }) => {
  return (
    <div className='outline-none border-none relative rounded-xl overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-25 z-99 rounded-xl'></div>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 text-center'>
        <h3 className='text-white text-[28px] lg:text-[28px]'>{title}</h3>
      </div>
      <Image
        className='w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-center'
        src={img}
        alt='banner'
        // layout='responsive'
        width={2000}
        height={2000}
        priority={true}
      />
    </div>
  );
};

export default Slide;
