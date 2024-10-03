// app/offers/page.tsx
import { DashboardLayout } from "@/components/dashboard-layout";
import { OffersTable } from "@/components/offers-table";

export default function OffersPage() {
  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-4">Offers</h1>
      <OffersTable />
    </DashboardLayout>
  );
}
