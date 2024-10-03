import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import CustomYAxisTick from "./CustomYAxisTick"; // Adjust the import path as needed

const data = [
  { name: "Mon", total: 1500 },
  { name: "Tue", total: 2300 },
  { name: "Wed", total: 1800 },
  { name: "Thu", total: 2100 },
  { name: "Fri", total: 2800 },
  { name: "Sat", total: 2000 },
  { name: "Sun", total: 1700 },
];

export function AnalyticsDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Card components for Total Revenue, Offers Sent, and Conversion Rate */}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Weekly Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888888" tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                tickLine={false}
                axisLine={false}
                tick={<CustomYAxisTick x={4} y={4} payload={{
                  value: 4
                }} />} // Use the custom tick component
              />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
