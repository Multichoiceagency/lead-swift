import React from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { ProductsTable } from "@/components/products-table";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Link href="/products/new">
          <Button>Add New Product</Button>
        </Link>
      </div>
      <ProductsTable />
    </DashboardLayout>
  );
}