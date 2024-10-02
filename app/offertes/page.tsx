// app/offertes/page.tsx
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
import { Button } from '../../components/ui/button';

const OffertesPage: React.FC = () => {
  const offertes = [
    {
      number: 'OFF001',
      status: 'Concept',
      name: 'Klant A',
      total: '€1000',
    },
    {
      number: 'OFF002',
      status: 'Verstuurd',
      name: 'Klant B',
      total: '€2000',
    },
    {
      number: 'OFF003',
      status: 'Concept',
      name: 'Klant C',
      total: '€3000',
    },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Offertes</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Offertenummer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Naam</TableHead>
            <TableHead>Totaal</TableHead>
            <TableHead>Actie</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {offertes.map((offerte) => (
            <TableRow key={offerte.number}>
              <TableCell>{offerte.number}</TableCell>
              <TableCell>{offerte.status}</TableCell>
              <TableCell>{offerte.name}</TableCell>
              <TableCell>{offerte.total}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Bekijk
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default OffertesPage;
