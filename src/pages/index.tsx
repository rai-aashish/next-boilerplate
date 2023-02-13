import { NextPage } from 'next';

import Counter from '@/components/Counter';

const HomePage: NextPage = () => {
  return (
    <div className='text-xl font-bold'>
      <Counter />
    </div>
  );
};

export default HomePage;
