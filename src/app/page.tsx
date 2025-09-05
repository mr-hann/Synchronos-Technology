'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, Dna, Rocket, Building2, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Users, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const communityFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  interest: z.enum(["training", "incubation", "mentorship"]),
});

export default function Home() {

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const communityForm = useForm<z.infer<typeof communityFormSchema>>({
    resolver: zodResolver(communityFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      interest: "training",
    },
  });

  function onContactSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
    // Handle form submission
  }

  function onCommunitySubmit(values: z.infer<typeof communityFormSchema>) {
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
                  <Link href="/#community">
                    Join the Movement
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background/70">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">About Synchronos</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Synchronos Technology was born from a singular, audacious idea: to guide humanity's evolution from a planetary species to a galactic civilization. Our mission is directly inspired by the Kardashev scale, a method of measuring a civilization's level of technological advancement.
                </p>
                 <Button asChild size="lg" variant="link" className="px-0 text-accent hover:text-accent/90">
                  <Link href="/about">
                    Read our full story <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
               <div>
                <Image
                  src="https://storage.googleapis.com/aall-demos/gene-editing/hero-synchronos.jpg"
                  alt="A person looking up at a galaxy, symbolizing humanity's future in space."
                  width={600}
                  height={600}
                  className="rounded-lg object-cover shadow-2xl shadow-primary/20"
                />
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
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/roadmap">
                  Explore The Full Roadmap <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="community" className="py-16 md:py-24 bg-background/70">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mb-4">
                Join Our Ecosystem
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Be part of a movement that's building the future. We provide the tools, community, and support to help you grow.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-24">
              <CommunityCard
                icon={<Code className="h-8 w-8 text-primary" />}
                title="Technology Training"
                description="Master cutting-edge web technologies through our hands-on programs and build the skills for a future-proof career."
              />
              <CommunityCard
                icon={<Rocket className="h-8 w-8 text-primary" />}
                title="Startup Incubation"
                description="Have a world-changing idea? We provide the resources, funding, and ecosystem to turn your startup into a success story."
              />
              <CommunityCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Mentorship Network"
                description="Connect with industry veterans, visionary founders, and technology experts who can guide you on your journey."
              />
            </div>

            <div className="grid grid-cols-1 lg:max-w-xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">Become a Part of Synchronos</CardTitle>
                  <CardDescription>Fill out the form below to express your interest in our programs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...communityForm}>
                    <form onSubmit={communityForm.handleSubmit(onCommunitySubmit)} className="space-y-8">
                      <FormField
                        control={communityForm.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={communityForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={communityForm.control}
                        name="interest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>I am interested in...</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a program" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="training">Technology Training</SelectItem>
                                <SelectItem value="incubation">Startup Incubation</SelectItem>
                                <SelectItem value="mentorship">Mentorship</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Submit Interest</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

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
                  content="+234 816 258 7661"
                  href="tel:+2348162587661"
                />
                <ContactInfo
                  icon={<MapPin className="h-6 w-6 text-primary" />}
                  title="Our Headquarters"
                  content="Port Harcourt, Rivers State, Nigeria"
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
                <Form {...contactForm}>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                    <FormField control={contactForm.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={contactForm.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={contactForm.control} name="subject" render={({ field }) => (
                      <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="What's this about?" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={contactForm.control} name="message" render={({ field }) => (
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

function CommunityCard({ icon, title, description }: { icon: React.ReactNode; title:string; description:string; }) {
  return (
    <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="flex justify-center items-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-headline mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  )
}
