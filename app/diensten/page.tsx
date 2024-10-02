// app/diensten/page.tsx
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

const DienstenPage: React.FC = () => {
  const diensten = [
    {
      name: 'Service 1',
      price: '€100',
      crossSell: 'Add-on 1',
      upSell: 'Premium 1',
    },
    {
      name: 'Service 2',
      price: '€200',
      crossSell: 'Add-on 2',
      upSell: 'Premium 2',
    },
    {
      name: 'Service 3',
      price: '€300',
      crossSell: 'Add-on 3',
      upSell: 'Premium 3',
    },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Diensten</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Naam</TableHead>
            <TableHead>Prijs</TableHead>
            <TableHead>Cross-sell</TableHead>
            <TableHead>Up-sell</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {diensten.map((dienst) => (
            <TableRow key={dienst.name}>
              <TableCell>{dienst.name}</TableCell>
              <TableCell>{dienst.price}</TableCell>
              <TableCell>{dienst.crossSell}</TableCell>
              <TableCell>{dienst.upSell}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default DienstenPage;
