'use client'
import React from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import ProductForm from '@/components/Product-Form';

export default function NewProductPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>
      <ProductForm />
    </DashboardLayout>
  );
}