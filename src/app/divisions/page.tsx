import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Unplug, Building, Waypoints, ShoppingCart, Rocket } from 'lucide-react';
import Image from 'next/image';

const divisions = [
  {
    name: 'Digital Innovation',
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    description: 'Crafting the software and digital tools that form the backbone of modern society and enterprise.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'abstract code'
  },
  {
    name: 'IoT Systems',
    icon: <Waypoints className="h-8 w-8 text-primary" />,
    description: 'Engineering the smart hardware and networks that connect our world, from individual devices to entire cities.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'iot network'
  },
  {
    name: 'Accessories',
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    description: 'Designing and producing innovative digital accessories and wearables that enhance daily life and integrate with our ecosystem.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'wearable tech'
  },
  {
    name: 'Real Estate',
    icon: <Building className="h-8 w-8 text-primary" />,
    description: 'Building the cities of tomorrow. Our smart cities are fully integrated, sustainable, and designed for human flourishing.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'smart city'
  },
  {
    name: 'Renewable Energy',
    icon: <Unplug className="h-8 w-8 text-primary" />,
    description: 'Powering the future. We develop and scale clean energy solutions to create a sustainable, energy-abundant world.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'solar panels'
  },
  {
    name: 'Space Exploration',
    icon: <Rocket className="h-8 w-8 text-primary" />,
    description: 'Expanding humanity\'s horizons. We build affordable and accessible technologies to make us a multi-planetary species.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'space exploration'
  },
];

export default function DivisionsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mb-4">
          Our Divisions
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Synchronos Technology operates through specialized divisions, each a pillar supporting our grand vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {divisions.map((division) => (
          <Card key={division.name} className="flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
            <div className="relative h-48 w-full">
              <Image 
                src={division.image} 
                alt={division.name} 
                fill 
                className="object-cover"
                data-ai-hint={division.aiHint}
              />
            </div>
            <CardHeader className="flex flex-row items-start gap-4">
              {division.icon}
              <div className="flex-1">
                <CardTitle className="font-headline text-2xl">{division.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription>{division.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
