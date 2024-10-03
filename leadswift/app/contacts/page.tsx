import { DashboardLayout } from "@/components/dashboard-layout"
import { ContactsTable } from "@/components/contacts-table"

export default function ContactsPage() {
  return (
    <DashboardLayout>
      <ContactsTable />
    </DashboardLayout>
  )
}