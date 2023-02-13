import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
interface CountState {
  count: number;
  increaseCount: (by?: number) => void;
}

//  COUNTER STORE
const useCounterStore = create(
  devtools<CountState>(
    (set) => ({
      count: 0,
      increaseCount: (by) =>
        set(
          (state) => ({ count: state.count + (by || 1) }),
          false,
          'counter/increase'
        ),
    }),
    {
      enabled: process.env.NODE_ENV === 'development',
    }
  )
);

export default useCounterStore;
