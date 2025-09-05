'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateCompanyContent } from '@/ai/flows/generate-company-content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Users, Code, Rocket, Sparkles } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  interest: z.enum(["training", "incubation", "mentorship"]),
});

const aiFormSchema = z.object({
  companyName: z.string().min(1, 'Company name is required.'),
  companyVision: z.string().min(10, 'Vision should be at least 10 characters.'),
  contentRequest: z.string().min(1, 'Content request is required.'),
});

export default function CommunityPage() {
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      interest: "training",
    },
  });

  const aiForm = useForm<z.infer<typeof aiFormSchema>>({
    resolver: zodResolver(aiFormSchema),
    defaultValues: {
      companyName: 'My Awesome Startup',
      companyVision: 'To boldly go where no one has gone before.',
      contentRequest: 'a mission statement',
    },
  });

  function onCommunitySubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  async function onAiSubmit(values: z.infer<typeof aiFormSchema>) {
    setIsGenerating(true);
    setGeneratedContent('');
    try {
      const result = await generateCompanyContent({
        ...values,
        tone: 'bold and ambitious',
      });
      setGeneratedContent(result.content);
    } catch (error) {
      console.error('Error generating content:', error);
      setGeneratedContent('An error occurred while generating content. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mb-4">
          Join Our Ecosystem
        </h1>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Become a Part of Synchronos</CardTitle>
            <CardDescription>Fill out the form below to express your interest in our programs.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onCommunitySubmit)} className="space-y-8">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="font-headline text-3xl flex items-center gap-2"><Sparkles className="h-6 w-6 text-primary" /> Innovation Lab</CardTitle>
            <CardDescription>Use our AI to craft compelling content for your own visionary projects.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...aiForm}>
              <form onSubmit={aiForm.handleSubmit(onAiSubmit)} className="space-y-6">
                <FormField
                  control={aiForm.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project / Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Nova Robotics" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={aiForm.control}
                  name="companyVision"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vision / Goal</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., To build fully autonomous, sentient AI companions." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={aiForm.control}
                  name="contentRequest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content to Generate</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., a one-sentence tagline" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isGenerating} className="w-full">
                  {isGenerating ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : 'Generate Content'}
                </Button>
              </form>
            </Form>
            {generatedContent && (
              <div className="mt-6 rounded-md border border-primary/50 bg-background p-4">
                <h4 className="font-headline font-semibold mb-2">Generated Content:</h4>
                <p className="text-sm text-foreground/90 whitespace-pre-wrap">{generatedContent}</p>
              </div>
            )}
          </CardContent>
        </Card>
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
