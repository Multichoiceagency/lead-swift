// analytics/page.tsx
import { DashboardLayout } from "@/components/dashboard-layout";
import { SalesChart } from "@/components/sales-chart";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-4">Analytics</h1>
      <SalesChart />
    </DashboardLayout>
  );
}
