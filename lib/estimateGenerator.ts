// lib/estimateGenerator.ts
export function generateEstimate(formData: any) {
    // Implement your logic to generate an estimate based on form data
    // This is a simplified example
    let total = 0;
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === 'number') {
        total += value;
      }
    }
    return {
      items: formData,
      total: total,
      // Add more fields as needed
    };
  }
  