import * as React from 'react';

import useCounterStore from '@/store/counterStore/index';

const Counter: React.FC = () => {
  const { count, increaseCount } = useCounterStore();
  return (
    <div className='m-2 inline-block rounded-xl px-4 py-2 text-[#ffffff] bg-[#000000]'>
      Counte:{count}
      <button
        onClick={() => increaseCount(1)}
        className='ml-3 border-[#ffff] border px-4 py-2 rounded'
      >
        increase
      </button>
    </div>
  );
};

export default Counter;
