import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, Dna, Rocket, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
             <Image 
                src="https://picsum.photos/1920/1080"
                alt="Futuristic cityscape"
                fill
                quality={100}
                className="object-cover opacity-20"
                data-ai-hint="futuristic cityscape"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-6">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Driving Humanity Toward a Type 3 Civilization.
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                Synchronos Technology is building the future, from digital realms to the far reaches of space. We are dedicated to advancing our world through innovation, sustainability, and a shared vision for a multi-planetary existence.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-transform duration-300 hover:scale-105">
                  <Link href="/community">
                    Join the Movement
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Our Grand Vision</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                We're not just building products; we're architecting the next era of human existence. Our roadmap is a multi-phase journey to elevate civilization, inspired by the Kardashev scale.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Cpu className="h-8 w-8 text-primary" />}
                title="Phase One: Digital"
                description="Laying the digital foundation for a connected world."
                href="/roadmap#phase-1"
              />
              <FeatureCard
                icon={<Dna className="h-8 w-8 text-primary" />}
                title="Phase Two: IoT"
                description="Connecting lives and cities with intelligent systems."
                href="/roadmap#phase-2"
              />
              <FeatureCard
                icon={<Building2 className="h-8 w-8 text-primary" />}
                title="Phase Three: Infrastructure"
                description="Building smart cities and sustainable energy grids."
                href="/roadmap#phase-3"
              />
              <FeatureCard
                icon={<Rocket className="h-8 w-8 text-primary" />}
                title="Phase Four: Space"
                description="Making humanity a multi-planetary species."
                href="/roadmap#phase-4"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <Link href={href}>
      <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="flex flex-row items-center gap-4">
          {icon}
          <CardTitle className="font-headline">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
