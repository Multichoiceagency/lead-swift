import React from "react";

// Define the props type for the CustomYAxisTick component
interface CustomYAxisTickProps {
  x: number; // X position
  y: number; // Y position
  payload: {
    value: number; // Value to display
  };
}

// Custom Y-axis tick component
const CustomYAxisTick: React.FC<CustomYAxisTickProps> = (props) => {
  const { x, y, payload } = props; // Destructure x, y, and payload from props

  return (
    <text x={x} y={y} dy={4} fontSize={12} fill="#888888" textAnchor="middle">
      {`€${payload.value}`} {/* Use payload.value to display the total */}
    </text>
  );
};

export default CustomYAxisTick;
