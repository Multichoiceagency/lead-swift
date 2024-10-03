'use client'

import React from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { ProductsTable } from "@/components/products-table";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const ProductsPageClient = () => {
  const router = useRouter();

  const handleAddProduct = () => {
    router.push('/products/new');
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Button onClick={handleAddProduct}>Add New Product</Button>
      </div>
      <ProductsTable />
    </DashboardLayout>
  );
};

export default ProductsPageClient;