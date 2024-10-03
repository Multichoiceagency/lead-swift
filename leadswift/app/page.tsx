'use client';

import { DashboardLayout } from "@/components/dashboard-layout"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { ContactsTable } from "@/components/contacts-table"
import { OffersTable } from "@/components/offers-table"
import { ProductConfigurator } from "@/components/product-configurator"
import { EstimateManager } from "@/components/estimate-manager"
import { Settings } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full">

    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <AnalyticsDashboard />
        </div>
        <div className="lg:col-span-2">
          <ContactsTable />
        </div>
        <div className="lg:col-span-1">
          <OffersTable />
        </div>
        <div className="lg:col-span-2">
          <ProductConfigurator />
        </div>
        <div className="lg:col-span-3">
          <EstimateManager />
        </div>
        <div className="lg:col-span-3">
          <Settings />
        </div>
      </div>
    </DashboardLayout>
    </section>

  )
}