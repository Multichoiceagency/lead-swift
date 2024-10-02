// components/FormBuilder/FormPreview.tsx
'use client';

import React from 'react';

interface FormPreviewProps {
  fields: any[];
}

const FormPreview: React.FC<FormPreviewProps> = ({ fields }) => {
  return (
    <div className="w-1/2 p-4 border-l">
      <h3 className="text-lg font-semibold mb-4">Voorbeeld</h3>
      <form>
        {fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            {/* Render field based on type */}
            {field.type === 'text' && (
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md"
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                className="mt-1 block w-full border-gray-300 rounded-md"
                rows={3}
              ></textarea>
            )}
            {/* Add other field types as needed */}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormPreview;
