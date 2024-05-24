import React from 'react';
import { BsBookmark, BsBag } from 'react-icons/bs';

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 py-6'>
      <div className='container flex justify-between items-center'>
        {/* Placeholder div to take up space on the left */}
        <div className='flex-1'></div>

        <div className='font-light text-3xl text-center text-[#7F00FF] flex-1'>
          Furrl
        </div>

        <div className='flex gap-4 text-gray-500 text-[30px] flex-1 justify-end'>
          <div className='relative'>
            <BsBookmark />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              0
            </div>
          </div>

          <div className='relative'>
            <BsBag />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
