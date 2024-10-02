// app/form-builder/page.tsx
'use client';

import React from 'react';
import Layout from '../../components/Layout';
import FormBuilder from '../../components/FormBuilder';
import { Button } from '../../components/ui/button';

const FormBuilderPage: React.FC = () => {
  const handleSaveForm = async () => {
    // Implement form saving logic
    console.log('Formulier opslaan...');
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Formulier Bouwer</h1>
      <FormBuilder />
      <Button onClick={handleSaveForm} className="mt-4">
        Formulier Opslaan
      </Button>
    </Layout>
  );
};

export default FormBuilderPage;
