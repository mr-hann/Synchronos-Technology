'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, Dna, Rocket, Building2, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});


export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

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

        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mb-4">
                Get In Touch
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Have a question, a partnership proposal, or just want to join the conversation? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <ContactInfo
                  icon={<Mail className="h-6 w-6 text-primary" />}
                  title="Email Us"
                  content="contact@synchronos.tech"
                  href="mailto:contact@synchronos.tech"
                />
                <ContactInfo
                  icon={<Phone className="h-6 w-6 text-primary" />}
                  title="Call Us"
                  content="+1 (555) 123-4567"
                  href="tel:+15551234567"
                />
                <ContactInfo
                  icon={<MapPin className="h-6 w-6 text-primary" />}
                  title="Our Headquarters"
                  content="1 Future Way, Smart City One, Earth"
                />
                <div className="pt-4">
                  <h3 className="font-headline text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex items-center gap-6">
                    <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" /></Link>
                    <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" /></Link>
                    <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" /></Link>
                    <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" /></Link>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 p-8 rounded-lg border border-border/50">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="What's this about?" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Your message..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
                  </form>
                </Form>
              </div>
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

function ContactInfo({ icon, title, content, href }: { icon: React.ReactNode; title: string; content: string; href?: string; }) {
  const contentEl = <p className="text-muted-foreground">{content}</p>;
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-headline text-xl font-semibold">{title}</h3>
        {href ? <Link href={href} className="hover:text-primary transition-colors">{contentEl}</Link> : contentEl}
      </div>
    </div>
  );
}
