import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EstimateCalculator } from "@/components/estimate-calculator";

export function EstimateManager() {
  const [estimates, setEstimates] = useState<any[]>([]);
  const [selectedEstimate, setSelectedEstimate] = useState<any | null>(null);
  const [note, setNote] = useState('');

  const addEstimate = (estimate: { withoutVat: number; withVat: number; discountAmount: number; discountPercentage: number; }) => {
    setEstimates([...estimates, { id: Date.now(), ...estimate }]);
  };

  const viewEstimate = (id: number) => {
    const estimate = estimates.find(e => e.id === id) || null;
    setSelectedEstimate(estimate);
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  return (
    <div className="space-y-4">
      <EstimateCalculator onSave={addEstimate} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Total (excl. VAT)</TableHead>
            <TableHead>Total (incl. VAT)</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {estimates.map((estimate) => (
            <TableRow key={estimate.id}>
              <TableCell>{estimate.id}</TableCell>
              <TableCell>€{estimate.withoutVat.toFixed(2)}</TableCell>
              <TableCell>€{estimate.withVat.toFixed(2)}</TableCell>
              <TableCell>
                <Button onClick={() => viewEstimate(estimate.id)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedEstimate && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <h2 className="text-lg font-semibold">Selected Estimate</h2>
          <p>Total (excl. VAT): €{selectedEstimate.withoutVat.toFixed(2)}</p>
          <p>Total (incl. VAT): €{selectedEstimate.withVat.toFixed(2)}</p>
          <p>Discount Amount: €{selectedEstimate.discountAmount.toFixed(2)}</p>
          <p>Discount Percentage: {selectedEstimate.discountPercentage}%</p>
          <div className="flex space-x-2 mt-2">
            <Button>Download PDF</Button>
            <Button>Send Estimate</Button>
            <Button>Edit</Button>
            <Button>Accept</Button>
            <Button>Decline</Button>
          </div>
          <Input
            placeholder="Add a note"
            value={note}
            onChange={handleNoteChange}
            className="mt-4"
          />
        </div>
      )}
    </div>
  );
}
