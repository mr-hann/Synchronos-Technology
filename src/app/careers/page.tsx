import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';

const jobOpenings = [
  {
    title: "Senior Quantum Computing Scientist",
    division: "Digital Innovation",
    location: "Smart City One, Earth",
    type: "Full-time",
  },
  {
    title: "Lead IoT Systems Architect",
    division: "IoT Systems",
    location: "Remote / Global",
    type: "Full-time",
  },
  {
    title: "Starship Propulsion Engineer",
    division: "Space Exploration",
    location: "Armstrong Base, Luna",
    type: "Full-time",
  },
  {
    title: "Renewable Energy Grid Specialist",
    division: "Renewable Energy",
    location: "Global",
    type: "Contract",
    highlight: true,
  },
  {
    title: "Lead Product Designer, Wearables",
    division: "Accessories",
    location: "Smart City One, Earth",
    type: "Full-time",
  },
  {
    title: "Community Manager, Tech Incubator",
    division: "Community & Training",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-accent mb-4">
          Shape the Future With Us
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We're looking for pioneers, innovators, and dreamers who are ready to build a Type 3 Civilization.
        </p>
      </div>

      <div className="space-y-6">
        {jobOpenings.map((job, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:border-primary/50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-secondary">{job.title}</CardTitle>
              <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {job.division}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${job.highlight ? 'bg-[#FFD700] text-black' : 'bg-primary/10 text-primary'}`}>{job.type}</span>
              <Button variant="ghost" className="text-secondary hover:text-secondary-foreground hover:bg-secondary">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
