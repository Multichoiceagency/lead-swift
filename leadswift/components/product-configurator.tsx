import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define a type for the dimension object
type Dimension = {
  title: string
  description: string
  value: string
}

export function ProductConfigurator() {
  // Use a type annotation for the state
  const [dimensions, setDimensions] = useState<Dimension[]>([
    { title: '', description: '', value: '' }
  ])

  // Function to add a new empty dimension
  const addDimension = () => {
    setDimensions([...dimensions, { title: '', description: '', value: '' }])
  }

  // Function to update a specific dimension
  const updateDimension = (index: number, field: keyof Dimension, value: string) => {
    const newDimensions = [...dimensions]
    newDimensions[index] = { ...newDimensions[index], [field]: value }
    setDimensions(newDimensions)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Configurator</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          {/* Product Name */}
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="Enter product name" />
          </div>
          
          {/* Product Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter product description" />
          </div>
          
          {/* Dimensions Section */}
          <div>
            <Label>Dimensions</Label>
            {dimensions.map((dim, index) => (
              <div key={index} className="grid grid-cols-3 gap-2 mt-2">
                <Input 
                  placeholder="Title" 
                  value={dim.title} 
                  onChange={(e) => updateDimension(index, 'title', e.target.value)} 
                />
                <Input 
                  placeholder="Description" 
                  value={dim.description} 
                  onChange={(e) => updateDimension(index, 'description', e.target.value)} 
                />
                <Input 
                  placeholder="Value" 
                  value={dim.value} 
                  onChange={(e) => updateDimension(index, 'value', e.target.value)} 
                />
              </div>
            ))}
            <Button type="button" onClick={addDimension} className="mt-2">Add Dimension</Button>
          </div>
          
          {/* Save Product Button */}
          <Button type="submit">Save Product</Button>
        </form>
      </CardContent>
    </Card>
  )
}
