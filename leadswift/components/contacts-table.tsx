import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const contacts = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1 234 567 890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1 234 567 891" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "+1 234 567 892" },
]

export function ContactsTable() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm" className="ml-2">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}