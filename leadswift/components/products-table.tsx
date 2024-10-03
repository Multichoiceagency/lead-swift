'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, Edit, RotateCcw } from 'lucide-react';
import useProductStore from '@/store/useProductStore';

export function ProductsTable() {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);
  const { products, deleteProduct, toggleRemoveProduct } = useProductStore();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/products/edit/${id}`);
  };

  if (!isHydrated) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id} className={product.isRemoved ? 'opacity-50' : ''}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>
              <Button variant="outline" className="mr-2" onClick={() => handleEdit(product.id)}>
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" className="mr-2" onClick={() => toggleRemoveProduct(product.id)}>
                {product.isRemoved ? <RotateCcw className="w-4 h-4 mr-2" /> : <Trash2 className="w-4 h-4 mr-2" />}
                {product.isRemoved ? 'Restore' : 'Remove'}
              </Button>
              <Button variant="destructive" onClick={() => deleteProduct(product.id)}>
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}