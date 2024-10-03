'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, X } from 'lucide-react';
import useProductStore from '@/store/useProductStore';

interface ProductFormProps {
  productId?: string;
}

interface Option {
  name: string;
  values: string[];
}

interface Variant {
  combination: string;
  price: number;
}

interface ProductData {
  id?: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  options: Option[];
  variants: Variant[];
  isRemoved?: boolean;
}

export default function ProductForm({ productId }: ProductFormProps) {
  const router = useRouter();
  const { getProduct, addProduct, editProduct } = useProductStore();
  const [product, setProduct] = useState<ProductData>({
    name: '',
    category: '',
    description: '',
    price: 0,
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
  });

  useEffect(() => {
    if (productId) {
      const existingProduct = getProduct(Number(productId));
      if (existingProduct) {
        setProduct({
          ...existingProduct,
          options: existingProduct.options || [],
          variants: existingProduct.variants || [],
          image: existingProduct.image || '',
        });
      }
    }
  }, [productId, getProduct]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addOption = () => {
    setProduct({
      ...product,
      options: [...product.options, { name: '', values: [] }],
    });
  };

  const updateOption = (index: number, field: keyof Option, value: string) => {
    const newOptions = [...product.options];
    if (field === 'name') {
      newOptions[index].name = value;
    } else if (field === 'values') {
      newOptions[index].values = value.split(',').map(v => v.trim());
    }
    setProduct({ ...product, options: newOptions });
  };

  const removeOption = (index: number) => {
    const newOptions = product.options.filter((_, i) => i !== index);
    setProduct({ ...product, options: newOptions });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (productId) {
      editProduct(Number(productId), product);
    } else {
      addProduct(product);
    }
    router.push('/products');
  };

  return (
    <div className="flex space-x-8">
      <div className="w-2/3">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={product.name} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" value={product.category} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" value={product.description} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input id="price" name="price" type="number" value={product.price} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="image">Image (6:4)</Label>
            <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} />
            {product.image && <img src={product.image} alt="Product" className="mt-2 w-48 h-32 object-cover" />}
          </div>
          <div>
            <Label>Options</Label>
            {product.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <Input 
                  value={option.name} 
                  onChange={(e) => updateOption(index, 'name', e.target.value)} 
                  placeholder="Option name"
                />
                <Input 
                  value={option.values.join(', ')} 
                  onChange={(e) => updateOption(index, 'values', e.target.value)} 
                  placeholder="Option values (comma-separated)"
                />
                <Button type="button" variant="outline" onClick={() => removeOption(index)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" onClick={addOption} className="mt-2">
              <PlusCircle className="h-4 w-4 mr-2" /> Add Option
            </Button>
          </div>
          <div>
            <Label>Variants</Label>
            {product.variants.map((variant, index) => (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <Input value={variant.combination} readOnly />
                <Input 
                  type="number" 
                  value={variant.price} 
                  onChange={(e) => {
                    const newVariants = [...product.variants];
                    newVariants[index].price = Number(e.target.value);
                    setProduct({ ...product, variants: newVariants });
                  }} 
                  placeholder="Price"
                />
                <Checkbox id={`edit-price-${index}`} />
                <Label htmlFor={`edit-price-${index}`}>Edit price</Label>
              </div>
            ))}
          </div>
          <Button type="submit">Save Product</Button>
        </form>
      </div>
      <div className="w-1/3">
        <div className="border p-4 rounded">
          <img src={product.image || '/placeholder-image.jpg'} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          {product.options.map((option, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold">{option.name}</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {option.values.map((value, vIndex) => (
                  <Button key={vIndex} variant="outline" size="sm">{value}</Button>
                ))}
              </div>
            </div>
          ))}
          <Button className="w-full mt-6">Offerta aanvragen +</Button>
        </div>
      </div>
    </div>
  );
}