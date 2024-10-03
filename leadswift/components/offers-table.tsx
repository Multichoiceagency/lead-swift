import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const offers = [
  { id: 1001, status: "Sent", date: "2023-08-01", name: "Alice Cooper", amount: "€ 5,000.00" },
  { id: 1002, status: "Accepted", date: "2023-08-02", name: "Bob Dylan", amount: "€ 7,500.00" },
  { id: 1003, status: "Pending", date: "2023-08-03", name: "Charlie Brown", amount: "€ 3,200.00" },
]

export function OffersTable() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Offers</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Offer ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {offers.map((offer) => (
            <TableRow key={offer.id}>
              <TableCell>{offer.id}</TableCell>
              <TableCell>
                <Badge variant={
                  offer.status === "Accepted" ? "default" : 
                  offer.status === "Pending" ? "default" : 
                  "default"  // You can replace this with a status like "secondary" if needed
                }>
                  {offer.status}
                </Badge>
              </TableCell>
              <TableCell>{offer.date}</TableCell>
              <TableCell>{offer.name}</TableCell>
              <TableCell>{offer.amount}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
                <Button variant="outline" size="sm" className="ml-2">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
