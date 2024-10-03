'use client'
import React from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import ProductForm from '@/components/Product-Form';

interface EditProductPageProps {
  params: {
    id: string;
  }
}

export default function EditProductPage({ params }: EditProductPageProps) {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Edit Product</h1>
      <ProductForm productId={params.id} />
    </DashboardLayout>
  );
}