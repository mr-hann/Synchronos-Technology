import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mb-4">
          Our Story: From a Vision to a Civilization
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Synchronos Technology was born from a singular, audacious idea: to guide humanity's evolution from a planetary species to a galactic civilization.
        </p>
      </section>

      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">The Kardashev Scale Inspiration</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is directly inspired by the Kardashev scale, a method of measuring a civilization's level of technological advancement based on the amount of energy it is able to use. We see the path from a Type 1 (planetary) to a Type 3 (galactic) civilization not as a distant dream, but as a tangible roadmap.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Synchronos Technology is the vehicle for this journey. Each phase of our growth, from digital services to space exploration, is a deliberate step up this cosmic ladder. We are methodically building the technological, infrastructural, and societal foundations required for each leap.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/600/400"
              alt="Cosmic art representing the Kardashev scale"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-2xl shadow-primary/20"
              data-ai-hint="cosmic art"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline text-center mb-12">Our Foundational Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PhilosophyCard
            icon={<Lightbulb className="h-8 w-8 text-primary" />}
            title="Innovation"
            description="We relentlessly pursue breakthrough technologies that solve fundamental challenges and create new possibilities for humanity."
          />
          <PhilosophyCard
            icon={<Target className="h-8 w-8 text-primary" />}
            title="Accessibility"
            description="We believe the future should be for everyone. Our goal is to democratize access to advanced technology, from web development to space travel."
          />
          <PhilosophyCard
            icon={<ShieldCheck className="h-8 w-8 text-primary" />}
            title="Sustainability"
            description="A thriving future requires a healthy home planet. We are committed to developing and deploying renewable energy and sustainable systems at a global scale."
          />
        </div>
      </section>
    </div>
  );
}

function PhilosophyCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) {
  return (
    <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 p-6">
      <CardHeader className="flex justify-center items-center mb-4">
        {icon}
      </CardHeader>
      <CardTitle className="mb-2 font-headline">{title}</CardTitle>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
