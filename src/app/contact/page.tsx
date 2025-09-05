'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
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
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mb-4">
          Get In Touch
        </h1>
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
