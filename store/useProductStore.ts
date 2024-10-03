import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ProductOption {
  name: string;
  values: string[];
}

interface ProductVariant {
  combination: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  options: ProductOption[];
  variants: ProductVariant[];
  isRemoved: boolean;
}

interface ProductStore {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'isRemoved'>) => void;
  editProduct: (id: number, updatedProduct: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  toggleRemoveProduct: (id: number) => void;
  getProduct: (id: number) => Product | undefined;
}

const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [
        {
          id: 1,
          name: 'Electric sun blinds',
          category: 'Blinds',
          description: 'Automated sun blinds for enhanced comfort',
          price: 1000,
          image: '',
          options: [
            { name: 'Width', values: ['300 CM', '400 CM', '500 CM', '600 CM', '700 CM', '800 CM'] },
            { name: 'Depth', values: ['250 CM', '300 CM', '350 CM', '400 CM', '450 CM', '500 CM'] },
            { name: 'Color cloth', values: ['Anthracite (RAL 7016)'] },
          ],
          variants: [
            { combination: '300 CM / 250 CM', price: 1000 },
            { combination: '300 CM / 300 CM', price: 1100 },
          ],
          isRemoved: false
        },
      ],
      addProduct: (product) => set((state) => ({
        products: [...state.products, { ...product, id: Date.now(), isRemoved: false }],
      })),
      editProduct: (id, updatedProduct) => set((state) => ({
        products: state.products.map((p) => 
          p.id === id ? { ...p, ...updatedProduct } : p
        ),
      })),
      deleteProduct: (id) => set((state) => ({
        products: state.products.filter((p) => p.id !== id),
      })),
      toggleRemoveProduct: (id) => set((state) => ({
        products: state.products.map((p) => 
          p.id === id ? { ...p, isRemoved: !p.isRemoved } : p
        ),
      })),
      getProduct: (id) => get().products.find((p) => p.id === id),
    }),
    {
      name: 'product-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useProductStore;