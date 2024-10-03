// app/form-builder/page.tsx
'use client';

import React from 'react';
import RequireAuth from '../../components/RequireAuth';
import FormBuilder from '../../components/FormBuilder';

export default function FormBuilderPage() {
  return (
    <RequireAuth>
      <div className="p-8">
        <FormBuilder />
      </div>
    </RequireAuth>
  );
}
