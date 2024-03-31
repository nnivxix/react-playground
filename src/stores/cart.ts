import { create } from "zustand";

export interface Item {
	id: string;
	name: string;
	image: string;
	price: number;
	category: string;
	description: string;
	quantity?: number;
}
interface CartStore {
	products: Item[];
	carts: Item[];
	getProducts: () => void;
	addToCart: (product: Item) => void;
}

const useCartStore = create<CartStore>((set, get) => ({
	products: [],
	carts: [],
	getProducts: async () => {
		const response = await fetch("http://localhost:8000/products");
		set({ products: await response.json() });
	},
	addToCart: (product: Item) => set({ carts: [...get().carts, product] }),
}));

export default useCartStore;
