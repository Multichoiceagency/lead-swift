import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Estimate {
  withoutVat: number; // Change to number
  withVat: number;    // Change to number
  discountAmount: number; // Change to number
  discountPercentage: number;
}

interface EstimateCalculatorProps {
  onSave: (estimate: Estimate) => void;
}

export function EstimateCalculator({ onSave }: EstimateCalculatorProps) {
  const [basePrice, setBasePrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [vat, setVat] = useState<number>(21);

  const calculateTotal = () => {
    const discountedPrice = basePrice * (1 - discount / 100);
    const totalWithVat = discountedPrice * (1 + vat / 100);
    return {
      withoutVat: Number(discountedPrice.toFixed(2)), // Keep as number
      withVat: Number(totalWithVat.toFixed(2)),       // Keep as number
      discountAmount: Number((basePrice - discountedPrice).toFixed(2)), // Keep as number
      discountPercentage: discount,
    };
  };

  // Automatically save the estimate whenever it changes
  useEffect(() => {
    const total = calculateTotal();
    onSave(total);
  }, [basePrice, discount, vat]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estimate Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="base-price">Base Price (€)</Label>
            <Input
              id="base-price"
              type="number"
              value={basePrice}
              onChange={(e) => setBasePrice(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="discount">Discount (%)</Label>
            <Input
              id="discount"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="vat">VAT (%)</Label>
            <Input
              id="vat"
              type="number"
              value={vat}
              onChange={(e) => setVat(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <p>Total (excl. VAT): €{calculateTotal().withoutVat.toFixed(2)}</p>
            <p>Total (incl. VAT): €{calculateTotal().withVat.toFixed(2)}</p>
            <p>Discount Amount: €{calculateTotal().discountAmount.toFixed(2)}</p>
            <p>Discount Percentage: {calculateTotal().discountPercentage}%</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
