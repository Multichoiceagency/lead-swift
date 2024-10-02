// components/Dashboard.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { useAuth } from '../context/authContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [forms, setForms] = useState([]);
  const [estimates, setEstimates] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch user's forms and estimates from your backend or Firebase
      // Replace the following with actual data fetching logic
      const fetchedForms = [
        { id: 'form1', name: 'Formulier 1' },
        { id: 'form2', name: 'Formulier 2' },
      ];
      const fetchedEstimates = [
        { id: 'estimate1', name: 'Offerte 1' },
        { id: 'estimate2', name: 'Offerte 2' },
      ];
      setForms(fetchedForms);
      setEstimates(fetchedEstimates);
    }
  }, [user]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Uw Formulieren</CardTitle>
          </CardHeader>
          <CardContent>
            {forms.length > 0 ? (
              forms.map((form) => (
                <div key={form.id} className="mb-2">
                  <Link href={`/forms/${form.id}`}>
                    <a className="text-blue-500 hover:underline">{form.name}</a>
                  </Link>
                </div>
              ))
            ) : (
              <p>Geen formulieren gevonden.</p>
            )}
            <Button asChild>
              <Link href="/form-builder">Nieuw Formulier Maken</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recente Offertes</CardTitle>
          </CardHeader>
          <CardContent>
            {estimates.length > 0 ? (
              estimates.map((estimate) => (
                <div key={estimate.id} className="mb-2">
                  <Link href={`/estimates/${estimate.id}`}>
                    <a className="text-blue-500 hover:underline">
                      {estimate.name}
                    </a>
                  </Link>
                </div>
              ))
            ) : (
              <p>Geen offertes gevonden.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
