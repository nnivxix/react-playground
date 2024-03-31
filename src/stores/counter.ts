import { create } from "zustand";

interface Counter {
	count: number;
	increase: () => void;
	decrease: () => void;
}

const useCounter = create<Counter>((set) => ({
	count: 0,
	increase: () =>
		set((state) => ({
			count: state.count + 1,
		})),
	decrease: () =>
		set((state) => ({
			count: state.count - 1,
		})),
}));

export default useCounter;
