// app/contacten/page.tsx
import React from 'react';
import Layout from '../../components/Layout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

const ContactenPage: React.FC = () => {
  const contacts = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      date: '2023-06-01',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '0987654321',
      date: '2023-06-02',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '1122334455',
      date: '2023-06-03',
    },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Contacten</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Naam</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefoon</TableHead>
            <TableHead>Datum</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.email}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default ContactenPage;
